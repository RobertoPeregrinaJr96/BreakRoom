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
    const newEntry = await tableExist(Table).create(body);
    return newEntry;
  } catch (error) {
    console.error(`Error creating entry in : ${error}`);
    throw error;
  }
};
//=============================================================
const readEntry = async (Table) => {
  try {
    const entries = await tableExist(Table).findAll();
    return entries;
  } catch (error) {
    console.error(`Error reading entries : ${error}`);
    throw error;
  }
};
//=============================================================
const readEntryById = async (Table, id) => {
  try {
    const entry = await tableExist(Table).findByPk(id);
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
const readEntryByAggerate = async (Table, filter) => {
  try {
    const entries = await tableExist(Table).findAll(filter);
    console.log(entries);
    return entries;
  } catch (error) {
    console.error(`Error reading entries by filter: ${error}`);
    throw error;
  }
};
const readOneEntriesByFilter = async (Table, filter) => {
  try {
    const entries = await tableExist(Table).findOne({ where: filter });
    return entries;
  } catch (error) {
    console.error(`Error filtering entries: ${error}`);
    throw error;
  }
};
const readAllEntriesByFilter = async (Table, filter) => {
  try {
    const entries = await tableExist(Table).findAll({ where: filter });
    return entries;
  } catch (error) {
    console.error(`Error filtering entries: ${error}`);
    throw error;
  }
};
const updateEntryById = async (Table, id, body) => {
  try {
    const entry = await tableExist(Table).findByPk(id);
    if (!entry) {
      throw new Error(`Entry with ID ${id} not found.`);
    }
    await entry.update(body);
    return entry;
  } catch (error) {
    console.error(`Error updating entry by ID: ${error}`);
    throw error;
  }
};
const deleteEntryById = async (Table, id) => {
  try {
    const entry = await tableExist(Table).findByPk(id);
    if (!entry) {
      throw new Error(`Entry with ID ${id} not found.`);
    }
    await entry.destroy();
    return true;
  } catch (error) {
    console.error(`Error deleting entry by ID: ${error}`);
    throw error;
  }
};

const paginateEntries = async (Table, options) => {
  try {
    const { page = 1, pageSize = 10 } = options;
    const offset = (page - 1) * pageSize;
    const entries = await tableExist(Table).findAll({
      offset,
      limit: pageSize,
    });
    return entries;
  } catch (error) {
    console.error(`Error paginating entries: ${error}`);
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
  tableExist,
  readEntryById,
  readEntryByAggerate,
  readOneEntriesByFilter,
  readAllEntriesByFilter,
  updateEntryById,
  deleteEntryById,
  paginateEntries,
};
