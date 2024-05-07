"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Modifier extends Model {
    static associate(models) {
      // define association here
      // Instructions
      Modifier.hasMany(models.InstructionModifier, {
        foreignKey: "modifierId",
      });
    }
  }
  Modifier.init(
    {
      name: DataTypes.STRING(250),
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Modifier",
    }
  );
  return Modifier;
};
