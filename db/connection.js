/**
 * Create your connection to the DB in this file
 * and remember to export it
 */

const { Pool } = require("pg");

const connection = new Pool({
  user: "harry",
  host: "localhost",
  database: "theme_parks",
  password: "password",
  port: 5432,
});
//testing push origin

module.exports = connection;
