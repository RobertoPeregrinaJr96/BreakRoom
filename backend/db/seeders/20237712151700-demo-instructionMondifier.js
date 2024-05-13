"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */

const InstructionModifier = [
  {
    orderItemId: 1,
    modifierId: 2,
  },
  {
    orderItemId: 1,
    modifierId: 11,
  },
  {
    orderItemId: 1,
    modifierId: 19,
  },
  {
    orderItemId: 1,
    modifierId: 25,
  },
  {
    orderItemId: 2,
    modifierId: 2,
  },
  {
    orderItemId: 2,
    modifierId: 11,
  },
  {
    orderItemId: 2,
    modifierId: 19,
  },
  {
    orderItemId: 2,
    modifierId: 25,
  },
  {
    orderItemId: 3,
    modifierId: 2,
  },
  {
    orderItemId: 3,
    modifierId: 11,
  },
  {
    orderItemId: 3,
    modifierId: 19,
  },
  {
    orderItemId: 3,
    modifierId: 25,
  },
  {
    orderItemId: 4,
    modifierId: 2,
  },
  {
    orderItemId: 4,
    modifierId: 11,
  },
  {
    orderItemId: 4,
    modifierId: 19,
  },
  {
    orderItemId: 4,
    modifierId: 25,
  },
  {
    orderItemId: 5,
    modifierId: 2,
  },
  {
    orderItemId: 5,
    modifierId: 11,
  },
  {
    orderItemId: 5,
    modifierId: 19,
  },
  {
    orderItemId: 5,
    modifierId: 25,
  },
  {
    orderItemId: 6,
    modifierId: 2,
  },
  {
    orderItemId: 6,
    modifierId: 11,
  },
  {
    orderItemId: 6,
    modifierId: 19,
  },
  {
    orderItemId: 6,
    modifierId: 25,
  },
  {
    orderItemId: 7,
    modifierId: 2,
  },
  {
    orderItemId: 7,
    modifierId: 11,
  },
  {
    orderItemId: 7,
    modifierId: 19,
  },
  {
    orderItemId: 7,
    modifierId: 25,
  },
  {
    orderItemId: 8,
    modifierId: 2,
  },
  {
    orderItemId: 8,
    modifierId: 11,
  },
  {
    orderItemId: 8,
    modifierId: 19,
  },
  {
    orderItemId: 8,
    modifierId: 25,
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
    options.tableName = "InstructionModifiers";
    return queryInterface.bulkInsert(options, InstructionModifier, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "InstructionModifiers";
    return queryInterface.bulkDelete(options, InstructionModifier, {});
  },
};
