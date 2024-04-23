"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations with other models

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