import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducers/app_reducer"

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    user: "1",
    charity: "",
    donations: [],
  });

  const setUser = user => dispatch({ type: "SET_USER", user });

  // gets data from db and sets state
  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/charities"),
      axios.get("/api/donations")
    ]).then(all => {
      dispatch({
        type: "SET_APPLICATION_DATA",
        users: all[0].data,
        charities: all[1].data,
        donations: all[2].data
      });
    });
  }, []);

  function makeDonation(id, donation) {
    return axios.put(`/api/donations/${id}`, { donation }).then(res => {
      dispatch({ type: "MAKE_DONATION", id, donation });
    });
  }

  function deleteDonation(id) {
    return axios.delete(`/api/donations/${id}`).then(res => {
      dispatch({ type: "MAKE_DONATION", id, donation: null });
    });
  }

  return { state, setUser, makeDonation, deleteDonation };
}
