import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducers/app_reducer";
import config from "../config";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    user: {},
    charity: {},
    charities: [],
    donations: []
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
        charities: all[1].data
      });
    });
  }, [state.user.id]);

  //takes stripe payment and donation information from make_donation, adds to donation state if successful
  function makeDonation(chargeData) {
    return axios
      .post(`${config.API_PATH}/api/donation`, chargeData)
      .then(({ data }) => {
        if (data.status === "succeeded") {
          dispatch({
            type: "MAKE_DONATION",
            donations: [data.donation, ...state.donations]
          });
          return "Succeeded";
        } else {
          alert(`Your payment was not completed.  ${data.status}`);
          return;
        }
      })
      .catch(error => {
        return "Failed";
      });
  }

  function handleSignUp(userData) {
    axios.put(`${config.API_PATH}/api/signup/`, userData).then(({ data }) => {
      setUser(data);
    });
  }

  function handleLogin(userData) {
    axios.put(`${config.API_PATH}/api/login`, userData).then(({ data }) => {
      if (data[0]) {
        setUser(data[0]);
      } else {
      alert("Email or password does not match");
      return;
      }
    });
  }
  return { state, setCharity, makeDonation, handleSignUp, handleLogin };
}
