const { Sequelize } = require('sequelize');

const dbName = 'trabalho final';
const dbUser = 'root';
const dbPassword = '';
const dbHost = 'localhost';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize