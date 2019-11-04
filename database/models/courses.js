const Sequelize = require('sequelize');
const db = require('../database');

module.exports = sequelize.define('courses', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING(50),
  domain: Sequelize.STRING(100),
  description: Sequelize.STRING(100)
});
