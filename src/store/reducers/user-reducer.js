let initialState = {
  userLoggedIn: false,
  userDetails: {name:''},
};

const UserLoggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGEDIN":
      return {
        ...initialState,
        userLoggedIn: true,
        userDetails: action.payload,
      };
    case "LOGGEDOUT":
      return initialState;
    default:
      return state;
  }
};
export default UserLoggedReducer;