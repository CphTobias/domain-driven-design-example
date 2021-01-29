//getters

/**
 *
 * @param {*} user
 * @param {*} withTitle?
 */
function getFullName({ user, withTitle = false }) {
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

export { getFullName, getTitle };

const User = {
  /**
   * @param {*} user
   */
  getFullName: getFullName,
  /**
   * @param {*} user
   */
  getTitle: getTitle,
};

export default User;
