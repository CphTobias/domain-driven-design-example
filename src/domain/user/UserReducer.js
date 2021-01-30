function userReducer(userState, { payload, type }) {
  switch (type) {
    case "LOGIN":
      return {
        name: {
          title: payload.name.title,
          first: payload.name.first,
          last: payload.name.last,
        },
        picture: {
          large: payload.picture.large,
          medium: payload.picture.medium,
          thumbnail: payload.picture.thumbnail,
        },
      };
    case "LOGOUT":
      return null;
    default:
      return userState;
  }
}

export default userReducer;
