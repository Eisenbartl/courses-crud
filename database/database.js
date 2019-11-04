const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('courses_db', 'root', process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => console.log('database connected to turtles and bananas'))
  .catch(err => console.log('oh no there was an error!', err));

module.exports = sequelize;
global.sequelize = sequelize;
