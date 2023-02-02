'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
      },
      price: {
        type: Sequelize.DataTypes.INTEGER
      },
      image: {
        type: Sequelize.DataTypes.STRING
      },
      category: {
        type: Sequelize.DataTypes.ENUM,
        values: ["CHICKEN", "ICE_CREAM", "DRINKS", "BURGER", "NOODLES", "DEFAULT"],
      },
      discount: {
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date()
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DataTypes.DATE,
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
