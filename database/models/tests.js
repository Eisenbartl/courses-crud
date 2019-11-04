const Sequelize = require('sequelize');

module.exports = sequelize.define('test', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  course_id: Sequelize.STRING(50),
  name: Sequelize.STRING(50),
  num_of_questions: Sequelize.INTEGER(50),
  duration: Sequelize.INTEGER(50)
});
