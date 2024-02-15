// create, read, update, delete
const {
  User,
  Item,
  Order,
  OrderItem,
  InstructionModifier,
  Modifier,
  Review,
} = require("../db/models");

const createEntry = async (Table, body) => {
  try {
    const newEntry = await Table.create(body);
    return newEntry;
  } catch (error) {
    console.error(`Error creating entry: ${error}`);
    throw error;
  }
};

const readEntry = async (Table) => {
  findTable(Table);
  try {
    const entries = await Table.findAll();
    return entries;
  } catch (error) {
    console.error(`Error reading entries: ${error}`);
    throw error;
  }
};

const readEntryById = async (Table, id) => {
  try {
    const entry = await Table.findByPk(id);
    if (!entry) {
      console.log(`Entry with ID ${id} not found.`);
      return null;
    }
    return entry;
  } catch (error) {
    console.error(`Error reading entry by ID: ${error}`);
    throw error;
  }
};

const readEntryByFilter = async (Table, filter) => {
  try {
    const entries = await Table.findAll({ where: filter });
    console.log(entries);
    return entries;
  } catch (error) {
    console.error(`Error reading entries by filter: ${error}`);
    throw error;
  }
};

const tableExist = (prompt) => {
  const tables = {
    User,
    Item,
    Order,
    OrderItem,
    InstructionModifier,
    Modifier,
    Review,
  };
  if (tables.hasOwnProperty(prompt)) {
    return tables[prompt];
  } else {
    throw new Error("No such table exists");
  }
};

module.exports = {
  createEntry,
  readEntry,
};
