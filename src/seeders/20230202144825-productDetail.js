'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("details_cart", [
      {
        id: "347ab6ff-aeb2-4f3f-8b4e-23ff49b95620",
        productId: "4908fae1-9bb6-44d1-9477-b5e97e0f3396",
        cartId: "0017497d-dda4-4152-87a5-70fe9dc97938",
      },
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
