import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducers/app_reducer"
import config from '../config';

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    user: {},
    charity: {},
    charities: [],
    donations: [],
  });

  const setUser = user => dispatch({ type: "SET_USER", user });
  const setCharity = charity => dispatch({ type: "SET_CHARITY", charity });

  // gets data from db and sets state
  useEffect(() => {
    if (!state.user.id) return;
    Promise.all([
      axios.get(`${config.API_PATH}/api/users/${state.user.id}/donations`),
      axios.get(`${config.API_PATH}/api/charities/all`)
    ]).then(all => {
      dispatch({
        type: "SET_APPLICATION_DATA",
        donations: all[0].data,
        charities: all[1].data,
      });
    });
  }, [state.user.id]);

  function makeDonation(chargeData) {
    console.log(chargeData, "chargeData");
    return axios.put(`${config.API_PATH}/api/payment`, chargeData).then(res => {
      dispatch({ type: "MAKE_DONATION", res}); // needs to set mode to USER
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
  return { state, setCharity, makeDonation, handleSignUp, handleLogin };
}
