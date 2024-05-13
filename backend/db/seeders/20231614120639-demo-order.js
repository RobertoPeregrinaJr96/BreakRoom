"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const orders = [
  {
    userId: 1,
    totalCost: 10,
    status: "pending",
    pointsEarned: 100,
  },
  {
    userId: 2,
    totalCost: 10,
    status: "pending",
    pointsEarned: 100,
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    options.tableName = "Orders";
    return queryInterface.bulkInsert(options, orders, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Orders";
    return queryInterface.bulkDelete(options, orders, {});
  },
};
