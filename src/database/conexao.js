const knex = require("knex")({
    client: "mysql2",
    version: "8.0",
    connection: {
      host: "mysql669.umbler.com",
      port:"41890",
      user: "app_pizzaria",
      password: "horusdev2020",
      database: "app_pizzaria_dev",
    },
  });

  
  
  module.exports = knex;

  knex.log;
  // sequelize.authenticate()
  // .then( () => {
  //     console.log("Db successfully connected");
  //     app.listen(port, () => console.log(`App started at: ${port}`) );
  // })
  // .catch( err => console.log('Unable to connect to the database') );



  