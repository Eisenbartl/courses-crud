'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('test', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      course_id: Sequelize.STRING(50),
      name: Sequelize.STRING(50),
      num_of_questions: Sequelize.INTEGER(50),
      duration: Sequelize.INTEGER(50),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('test');
  }
};
