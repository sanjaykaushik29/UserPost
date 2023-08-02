'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users', 'roll', 'role');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users', 'role','roll');
  }
};
