import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducers/app_reducer"
import config from '../config';

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    user: {},
    charity: [],
    donations: [],
  });

  const setUser = user => dispatch({ type: "SET_USER", user });
  console.log(state.user.id, "state.user.id in useApplicationData")
  // gets data from db and sets state
  useEffect(() => {
    if (!state.user.id) return;
    console.log(state.user.id, "state.user.id before Promises")
    Promise.all([
      axios.get(`${config.API_PATH}/api/users/${state.user.id}/donations`),
      axios.get(`${config.API_PATH}/api/charities`)
    ]).then(all => {
      console.log(all[0].data, "should be Donations")
      console.log(state.user.id, "state.user.id before Dispatch")
      dispatch({
        type: "SET_APPLICATION_DATA",
        donations: all[0].data,
        charities: all[1].data,
      });
    });
  }, [state.user.id]);

  function makeDonation(userId, charityId, amountCents) {
    return axios.put(`${config.API_PATH}/users/${userId}/charities/${charityId}/${amountCents}`).then(res => {
      dispatch({ type: "MAKE_DONATION", userId});
    });
  }

  function handleSignUp(userData) {
    axios.put(`${config.API_PATH}/api/signup/`, userData).then(({ data }) => {
      setUser(data)
    })
  }

  function handleLogin(userData) {
    axios.put(`${config.API_PATH}/api/login`, userData).then(({ data }) => {
      if (data[0]) {
      setUser(data[0])  
      }
      // have error message here if user not found
      return;
    })
  }
  return { state, setUser, makeDonation, handleSignUp, handleLogin };
}
