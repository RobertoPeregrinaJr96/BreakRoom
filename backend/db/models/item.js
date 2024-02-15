"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Association for Shopping Cart
      Item.hasMany(models.OrderItem, {
        foreignKey: "itemId",
        hooks: true,
        otherKey: "id",
      });
      // Association for Reviews
      Item.hasMany(models.Review, {
        foreignKey: "itemId",
        hooks: true,
        otherKey: "id",
      });
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      defaultModifiers: {
        type: DataTypes.TEXT,
      },
      itemImage: {
        type: DataTypes.String,
      },
      waitTime: {
        type: DataTypes.Integer,
      },
      type: {
        type: DataTypes.STRING(10),
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
