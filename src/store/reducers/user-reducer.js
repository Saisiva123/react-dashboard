let initialState = {
  userLoggedIn: true,
  userDetails: {name:''},
};

const UserLoggedReducer = (state = initialState, action) => {
  console.log(action.payload)
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