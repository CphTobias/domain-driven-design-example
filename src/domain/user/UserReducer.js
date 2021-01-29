import User from "./User";

function userReducer(state, action) {
  switch (action.type) {
    case "idk":
      return User.getFullName({ user: "hello", withTitle: true });
    default:
      return state;
  }
}

export default userReducer;
