/**
 * NOTE: Knex is actually constructing SQL from the calls you make.
 * When running:
 *   knex migrate:latest
 * knex is going to create a new table in the mySql db (monitor with mysql-workbench)
 */

exports.up = function (knex, Promise) {
    return knex.schema.createTable('user', function (t) {
        t.increments('id').primary()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('user')
};
