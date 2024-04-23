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
  // 2
  {
    name: "Medium",
    price: 0.2,
  },
  // 3
  {
    name: "large",
    price: 0.2,
  },
  // 4
  {
    name: "Extra Large",
    price: 0.2,
  },
  // 5
  {
    name: "Gallon",
    price: 0.2,
  },
  // 6
  {
    name: "Office (3 Gallons)",
    price: 0.2,
  }, // 7
  {
    name: "No Creamer",
    price: 0,
  },
  // 8
  {
    name: "Heavy Cream",
    price: 0.2,
  },
  // 9
  {
    name: "Vanilla Sweet Cream",
    price: 0.2,
  },
  // 10
  {
    name: "Nonfat Milk",
    price: 0.2,
  },
  // 11
  {
    name: "2% Milk",
    price: 0.2,
  },
  // 12
  {
    name: "Whole Mlik",
    price: 0.2,
  },
  // 13
  {
    name: "Breve (Half & Half)",
    price: 0.2,
  },
  // 14
  {
    name: "Almond",
    price: 0.2,
  },
  // 15
  {
    name: "Coconut",
    price: 0.2,
  },
  // 16
  {
    name: "Oatmilk",
    price: 0.2,
  },
  // 17
  {
    name: "Soy",
    price: 0.2,
  },
  // 18
  {
    name: "Warm",
    price: 0.2,
  },
  // 19
  {
    name: "Iced",
    price: 0.2,
  },
  // 20
  {
    name: "Cold",
    price: 0.2,
  },
  // 21
  {
    name: "Hot",
    price: 0.2,
  },
  // 22
  {
    name: "Very Hot",
    price: 0.2,
  },
  // 23
  {
    name: "Steamed",
    price: 0.2,
  },
  // 24
  {
    name: "No Espresso shot",
    price: 0,
  },
  // 25
  {
    name: "Signature Espresso Roast",
    price: 0.2,
  },
  // 26
  {
    name: "Blond Espresso Roast",
    price: 0.2,
  },
  // 27
  {
    name: "Decaf Espresso Roast",
    price: 0.2,
  },
  // 28
  {
    name: "1/3 Decaf Espresso Roast",
    price: 0.2,
  },
  // 29
  {
    name: "1/2 Decaf Espresso Roast",
    price: 0.2,
  },
  // 30
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
