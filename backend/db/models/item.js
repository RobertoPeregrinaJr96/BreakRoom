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
        type: DataTypes.STRING(250),
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
        type: DataTypes.STRING(250),
      },
      waitTime: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING(10),
      },
      totalReviewScore: {
        type: DataTypes.FLOAT(2, 2), // Assuming the review scores are integers
        defaultValue: 0, // Default value to start with
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
