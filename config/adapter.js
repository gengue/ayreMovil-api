module.exports.adapters = {

    'default': process.env.NODE_ENV || 'development',

    development: {
        module: 'sails-mysql',
        host: 'localhost',
        user: 'todouser',
        password: 'todopass',
        database: 'todomvc',
        pool: true,
        connectionLimit: 2,
        waitForConnections: true
    },

    production: {
        module: 'sails-mysql',
        host: process.env.MYSQLS_HOSTNAME,
        user: process.env.MYSQLS_USERNAME,
        password: process.env.MYSQLS_PASSWORD,
        database: process.env.MYSQLS_DATABASE,
        pool: true,
        connectionLimit: 2,
        waitForConnections: true
    }
};