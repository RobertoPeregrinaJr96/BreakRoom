"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Item, {
        foreignKey: "itemId",
        hooks: true,
        otherKey: "id",
      });
      Review.belongsTo(models.User, {
        foreignKey: "userId",
        hooks: true,
        otherKey: "id",
      });
    }
  }
  Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reviewImage: {
        type: DataTypes.String,
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
