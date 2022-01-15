let initialState = {
  userLoggedIn: true,
  userDetails: {name:'',password:''},
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