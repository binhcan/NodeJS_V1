'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{

      password: '12345678',
      email: 'example@example.com',
      firstName: 'John',
      lastName: 'Doe',
      address: 'TP HaiDuong',
      gender: 1,
      roleID: 'ROLE',
      phonenumber: '12345678',
      posotionId: 'doctor',
      image: '12345678',

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
