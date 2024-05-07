"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.hasMany(models.OrderItem, {
        foreignKey: "orderId", // Foreign key in OrderItem table
      });
      Order.belongsTo(models.User, {
        foreignKey: "userId", // Foreign key in Order table
      });
    }
  }

  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // The foreign key references the User model's id
      },
      totalCost: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING(250),
      },
      pointsEarned: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );

  return Order;
};
