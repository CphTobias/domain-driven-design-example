function userReducer(userState, action) {
  switch (action.type) {
    case "LOGIN":
      return; //Some login
    case "LOGOUT":
      return; //Some logout
    default:
      return userState;
  }
}

export default userReducer;
