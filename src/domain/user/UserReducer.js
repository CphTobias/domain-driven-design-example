function userReducer(userState, { payload, type }) {
  const { name, picture } = payload;

  switch (type) {
    case "LOGIN":
      return {
        name: {
          title: name.title,
          first: name.first,
          last: name.last,
        },
        picture: {
          large: picture.large,
          medium: picture.medium,
          thumbnail: picture.thumbnail,
        },
      };
    case "LOGOUT":
      return null;
    default:
      return userState;
  }
}

export default userReducer;
