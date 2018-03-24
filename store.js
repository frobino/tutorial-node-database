/**
 * Mock the store in order to check that our API works.
 */
module.exports = {
  createUser({ username, password }) {
    console.log(`Add user ${username} with password ${password}`)
    return Promise.resolve()
  }
}
