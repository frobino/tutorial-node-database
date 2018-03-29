/**
 * Use Knex to write the data to the "user" table in mySql
 * whenever a createUser request is made.
 */
const knex = require('knex')(require('./knexfile'))

/**
 * Use crypto use crypto to encrypt the password stored.
 * Note that crypto is a native node module and need not be installed using npm
 */
const crypto = require('crypto')

/**
 * Export saltHashPassword and createUser methods
 */
module.exports = {
  saltHashPassword,
  createUser({ username, password }) {
    console.log(`Add user ${username}`)
    const { salt, hash } = saltHashPassword(password)
    return knex('user').insert({
      salt,
      encrypted_password: hash,
      username
    })
  }
}

function saltHashPassword(password) {
  const salt = randomString()
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password)
  return {
    salt,
    hash: hash.digest('hex')
  }
}

function randomString() {
  return crypto.randomBytes(4).toString('hex')
}