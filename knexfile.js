/**
 * This code connects to the database.
 * I have used default credentials to connect locally to MySQL, you may need to change this if yours are different.
 * Create a new migration and name it something meaningful:
 *   knex migrate:make create_user_table
 */
module.exports = {
    client: 'mysql',
    connection: {
      user: 'root',
      password: 'password',
      database: 'tutorial_node_database'
    }
  }