"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Modifier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Instructions
      Modifier.belongsTo(models.InstructionModifier, {
        foreignKey: "modifierId",
        hooks: true,
        otherKey: "id",
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
