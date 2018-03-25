/**
 * Use Knex to write the data to the "user" table in mySql
 * whenever a createUser request is made.
 */

const knex = require('knex')(require('./knexfile'))

module.exports = {
  createUser({ username, password }) {
    console.log(`Add user ${username} with password ${password}`)
    return knex('user').insert({
      username,
      password
    })
  }
}
