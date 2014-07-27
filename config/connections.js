

module.exports.connections = {

   postgresql: {
    adapter: 'sails-postresql',
    host: 'ec2-54-225-101-164.compute-1.amazonaws.com',
    user: 'ubzsdwrmtptmuh',
    password: 'zxlya3vz2mM_-uejl2AB-PYuDB',
    database: 'dfqjfq2nsesbkc'
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
