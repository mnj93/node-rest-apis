require('dotenv').config();


module.exports = {
  development: {
    username: 'macbookair',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
    host: process.env.DB_HOST,
    port: 5432,
    maxConcurrentQueries: 100,
    dialect: process.env.DB_DIALECT,
    logging: false,
    //operatorsAliases: false,
    pool: {
      maxConnections: 5,
      maxIdleTime: 30
    },
  },
  test: {
    username: "macbookair",
    password: "",
    database: "acac",
    host: process.env.DB_HOST,
    port: 5432,
    maxConcurrentQueries: 100,
    dialect: process.env.DB_DIALECT,
    logging: false,
    //operatorsAliases: false,
    pool: {
      maxConnections: 5,
      maxIdleTime: 30
    },
  }
}