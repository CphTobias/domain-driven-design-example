//getters

/**
 *
 * @param {*} user
 * @param {*} withTitle?
 */
function getFullName(user, withTitle = false) {
  let name;
  if (withTitle) {
    name = `${user.name.title}`;
  }
  name = `${name} ${user.name.first} ${user.name.last}`;
  return name;
}

/**
 * @param {*} user
 */
function getTitle(user) {
  return `${user.name.title}`;
}

/**
 * @param {*} user
 * @param {*} size = "thumbnail" | "medium" | "large"
 */
function getPicture(user, size = "thumbnail" | "medium" | "large") {
  let link;
  if (size === "thumbnail") {
    link = user.picture.thumbnail;
  } else if (size === "medium") {
    link = user.picture.medium;
  } else {
    link = user.picture.large;
  }
  return <img src={link} alt="userpicture" />;
}

const User = {
  /**
   * @param {*} user
   */
  getFullName: getFullName,
  /**
   * @param {*} user
   */
  getTitle: getTitle,
  /**
   * @param {*} user
   * @param {*} size = "thumbnail" | "medium" | "large"
   */
  getPicture: getPicture,
};

export { getFullName, getTitle, getPicture };
export default User;
