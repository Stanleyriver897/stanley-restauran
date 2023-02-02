'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("carts", [
      {
        id: "bef0cb4f-2082-4a10-989f-67ed946be4dd",
        createdAt: new Date(),
      },
    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cart", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
