"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      // Define associations with other models

      // Belongs To Order (Each OrderItem belongs to an Order)
      OrderItem.belongsTo(models.Order, {
        foreignKey: "orderId", // Foreign key in OrderItem table
      });

      // Belongs To Item (Each OrderItem belongs to an Item)
      OrderItem.belongsTo(models.Item, {
        foreignKey: "itemId", // Foreign key in OrderItem table
      });
      OrderItem.hasMany(models.InstructionModifier, {
        foreignKey: "orderItemId",
      });
    }
  }

  OrderItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // The foreign key references the Order model's id
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // The foreign key references the Item model's id
      },
      customInstruction: {
        type: DataTypes.STRING(250),
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );

  return OrderItem;
};
