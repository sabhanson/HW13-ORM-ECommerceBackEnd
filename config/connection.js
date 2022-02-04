const Sequelize = require('sequelize'); //required to use sequelize package
require('dotenv').config(); //required to use .env package and hide sensitive info

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;