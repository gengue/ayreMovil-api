

module.exports.connections = {

   mongodb: {
    adapter: 'sails-mongo',
    host: 'ds055689.mongolab.com',
    user: 'admin',
    password: 'delunoalnueve',
    database: 'ayremovil'
  },

  MysqlServer: {
    adapter: 'sails-mysql',
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'ayremovil'
  },

  /*
  someMongodbServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    // user: 'username',
    // password: 'password',
    // database: 'your_mongo_db_name_here'
  } 
  */

};
