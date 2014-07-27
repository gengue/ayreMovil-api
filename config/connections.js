

module.exports.connections = {

   mongodb: {
    adapter: 'sails-mongo',
    url: 'MONGOHQ_URL'
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
