"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Association for
      OrderItem.belongsTo(models.Order, {
        foreignKey: "orderId",
        hooks: true,
        otherKey: "id",
      });
      OrderItem.belongsTo(models.Item, {
        foreignKey: "itemId",
        hooks: true,
        otherKey: "id",
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
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
