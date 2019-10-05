export default function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      console.log(action.user, "action.user")
      return { ...state, user: action.user };
    case "SET_CHARITY":
      console.log(action.charity, "action.charity")
      return { ...state, charity: action.charity};
    case "SET_APPLICATION_DATA":
      return {
        ...state,
        donations: action.donations,
        charities: action.charities
      };

    case "GET_USER_DONATIONS":
      return { ...state, donations: action.userDonations };

    case "MAKE_DONATION": {
      return { ...state, donations: action.donations };
    }
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}
