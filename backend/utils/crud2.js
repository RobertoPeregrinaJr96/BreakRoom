const { User, Item, Order, OrderItem, InstructionModifier, Modifier, Review } = require("../db/models");

class DatabaseHandler {
  constructor() {
    this.tables = {
      User,
      Item,
      Order,
      OrderItem,
      InstructionModifier,
      Modifier,
      Review,
    };
  }

  async createEntry(tableName, body) {
    try {
      const Table = this.getTable(tableName);
      const newEntry = await Table.create(body);
      return newEntry;
    } catch (error) {
      console.error(`Error creating entry in : ${error}`);
      throw error;
    }
  }

  async readAll(tableName) {
    try {
      const Table = this.getTable(tableName);
      const entries = await Table.findAll();
      return entries;
    } catch (error) {
      console.error(`Error reading entries : ${error}`);
      throw error;
    }
  }

  async readById(tableName, id) {
    try {
      const Table = this.getTable(tableName);
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
  }

  async updateById(tableName, id, body) {
    try {
      const Table = this.getTable(tableName);
      const entry = await Table.findByPk(id);
      if (!entry) {
        throw new Error(`Entry with ID ${id} not found.`);
      }
      await entry.update(body);
      return entry;
    } catch (error) {
      console.error(`Error updating entry by ID: ${error}`);
      throw error;
    }
  }

  async deleteById(tableName, id) {
    try {
      const Table = this.getTable(tableName);
      const entry = await Table.findByPk(id);
      if (!entry) {
        throw new Error(`Entry with ID ${id} not found.`);
      }
      await entry.destroy();
    } catch (error) {
      console.error(`Error deleting entry by ID: ${error}`);
      throw error;
    }
  }

  async paginateEntries(tableName, options) {
    try {
      const { page = 1, pageSize = 10 } = options;
      const Table = this.getTable(tableName);
      const offset = (page - 1) * pageSize;
      const entries = await Table.findAll({ offset, limit: pageSize });
      return entries;
    } catch (error) {
      console.error(`Error paginating entries: ${error}`);
      throw error;
    }
  }

  getTable(tableName) {
    const Table = this.tables[tableName];
    if (!Table) {
      throw new Error("No such table exists");
    }
    return Table;
  }
}

module.exports = DatabaseHandler;