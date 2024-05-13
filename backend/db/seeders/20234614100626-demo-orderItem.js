"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const orderItems = [
  {
    itemId: 1,
    orderId: 1,
    customInstruction: "lol",
    quantity: 1,
  },
  {
    itemId: 2,
    orderId: 1,
    customInstruction: "lol",
    quantity: 1,
  },
  {
    itemId: 3,
    orderId: 1,
    customInstruction: "lol",
    quantity: 1,
  },
  {
    itemId: 4,
    orderId: 1,
    customInstruction: "lol",
    quantity: 1,
  },
  {
    itemId: 5,
    orderId: 1,
    customInstruction: "lol",
    quantity: 1,
  },
  {
    itemId: 6,
    orderId: 1,
    customInstruction: "lol",
    quantity: 1,
  },
  {
    itemId: 7,
    orderId: 1,
    customInstruction: "lol",
    quantity: 1,
  },
  {
    itemId: 8,
    orderId: 1,
    customInstruction: "lol",
    quantity: 1,
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
    options.tableName = "OrderItems";
    return queryInterface.bulkInsert(options, orderItems, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "OrderItems";
    return queryInterface.bulkDelete(options, orderItems, {});
  },
};
