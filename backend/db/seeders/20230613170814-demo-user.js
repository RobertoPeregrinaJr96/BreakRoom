/** @type {import('sequelize-cli').Migration} */
"use strict";
const bcrypt = require("bcryptjs");
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
const users = [
  {
    firstName: "John",
    lastName: "Smith",
    phoneNumber: "1111111",
    username: "Demo-lition",
    email: "demo@user.io",
    profileImageUrl:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/user_seeders/pexels-demo1-.jpg",
    hashedPassword: bcrypt.hashSync("password"),
  },
  {
    firstName: "jane",
    lastName: "Doe",
    phoneNumber: "2222222",
    username: "FakeUser1",
    email: "user1@user.io",
    profileImageUrl:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/user_seeders/pexels-demo2-.jpg",
    hashedPassword: bcrypt.hashSync("password"),
  },
  {
    firstName: "Charlotte",
    lastName: "Wondering",
    phoneNumber: "3333333",
    username: "FakeUser2",
    email: "user2@user.io",
    profileImageUrl:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/user_seeders/pexels-demo3.jpg",
    hashedPassword: bcrypt.hashSync("password"),
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    phoneNumber: "4444444",
    username: "Alice123",
    email: "alice@example.com",
    profileImageUrl: "https://example.com/profiles/alice.jpg",
    hashedPassword: bcrypt.hashSync("password"),
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    phoneNumber: "5555555",
    username: "BobJ",
    email: "bob@example.com",
    profileImageUrl: "https://example.com/profiles/bob.jpg",
    hashedPassword: bcrypt.hashSync("password"),
  },
  {
    firstName: "Eve",
    lastName: "Adams",
    phoneNumber: "6666666",
    username: "EveA",
    email: "eve@example.com",
    profileImageUrl: "https://example.com/profiles/eve.jpg",
    hashedPassword: bcrypt.hashSync("password"),
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    phoneNumber: "7777777",
    username: "MBrown",
    email: "michael@example.com",
    profileImageUrl: "https://example.com/profiles/michael.jpg",
    hashedPassword: bcrypt.hashSync("password"),
  },
  {
    firstName: "Sophia",
    lastName: "Wilson",
    phoneNumber: "8888888",
    username: "SWilson",
    email: "sophia@example.com",
    profileImageUrl: "https://example.com/profiles/sophia.jpg",
    hashedPassword: bcrypt.hashSync("password"),
  },
];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkInsert(options, users, {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkDelete(options, users, {});
  },
};
