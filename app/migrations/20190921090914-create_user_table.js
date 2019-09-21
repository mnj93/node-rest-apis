'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      full_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
          allowNull: false,
          type: Sequelize.STRING,
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone_number: {
          allowNull: false,
          type: Sequelize.STRING,
      },
      date_of_birth: {
          allowNull: false,
          type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    }).then(() => {
      queryInterface.addIndex('users', ['email'], {unique: true})
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
