"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const modifiers = [
  // 1
  {
    name: "Small",
    price: 0.2,
  },
  {
    name: "Medium",
    price: 0.2,
  },
  {
    name: "large",
    price: 0.2,
  },
  // 5
  {
    name: "Extra Large",
    price: 0.2,
  },
  {
    name: "Gallon",
    price: 0.2,
  },
  {
    name: "Office (3 Gallons)",
    price: 0.2,
  },
  {
    name: "No Creamer",
    price: 0,
  },
  {
    name: "Heavy Cream",
    price: 0.2,
  },
  {
    name: "Vanilla Sweet Cream",
    price: 0.2,
  },
  //10
  {
    name: "Nonfat Milk",
    price: 0.2,
  },
  {
    name: "2% Milk",
    price: 0.2,
  },
  {
    name: "Whole Mlik",
    price: 0.2,
  },
  {
    name: "Breve (Half & Half)",
    price: 0.2,
  },
  {
    name: "Almond",
    price: 0.2,
  },
  {
    name: "Coconut",
    price: 0.2,
  },
  {
    name: "Oatmilk",
    price: 0.2,
  },
  {
    name: "Soy",
    price: 0.2,
  },
  {
    name: "Warm",
    price: 0.2,
  },
  {
    name: "Iced",
    price: 0.2,
  },
  {
    name: "Cold",
    price: 0.2,
  },
  {
    name: "Hot",
    price: 0.2,
  },
  {
    name: "Very Hot",
    price: 0.2,
  },
  {
    name: "Steamed",
    price: 0.2,
  },
  {
    name: "No Espresso shot",
    price: 0,
  },
  {
    name: "Signature Espresso Roast",
    price: 0.2,
  },
  {
    name: "Blond Espresso Roast",
    price: 0.2,
  },
  {
    name: "Decaf Espresso Roast",
    price: 0.2,
  },
  {
    name: "1/3 Decaf Espresso Roast",
    price: 0.2,
  },
  {
    name: "1/2 Decaf Espresso Roast",
    price: 0.2,
  },
  {
    name: "2/3 Decaf Espresso Roast",
    price: 0.2,
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Modifiers";
    return queryInterface.bulkInsert(options, modifiers, {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Modifiers";
    return queryInterface.bulkDelete(options, modifiers, {});
  },
};
