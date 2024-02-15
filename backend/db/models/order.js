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
      // define association here
      Order.hasMany(models.OrderItem, {
        foreignKey: "orderId",
        hooks: true,
        otherKey: "id",
      });
      Order.belongsTo(models.User, {
        foreignKey: "userId",
        hooks: true,
        otherKey: "id",
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
      },
      totalCost: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.String,
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
