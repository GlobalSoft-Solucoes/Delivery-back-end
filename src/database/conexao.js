const knex = require("knex")({
    client: "mysql2",
    version: "8.0",
    connection: {
      host: "mysql669.umbler.com",
      user: "app_pizzaria",
      password: "horusdev2020",
      database: "app_pizzaria_dev",
    },
  });
  
  module.exports = knex;
  