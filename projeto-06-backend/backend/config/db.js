const config = require('../knexfile.js')
const knex = require('knex')(config)

//Migrations no banco
knex.migrate.latest([config])

module.exports = knex