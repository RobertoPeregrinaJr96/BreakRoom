"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Analytic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Analytic.belongsTo(models.User, {
        foreignKey: "userId",
        hooks: true,
        otherKey: "id",
      });
    }
  }
  Analytic.init(
    {
      userId: {
        type: DataTypes.INTEGER,
      },
      totatlOrders: {
        type: DataTypes.INTEGER,
      },
      totatlSpent: {
        type: DataTypes.INTEGER,
      },
      avgOrderValue: {
        type: DataTypes.INTEGER,
      },
      orderFrequency: {
        type: DataTypes.INTEGER,
      },
      lastPurchase: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Analytic",
    }
  );
  return Analytic;
};
