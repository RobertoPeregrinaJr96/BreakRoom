"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class InstructionModifier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Many To Many

      // Instructions
      InstructionModifier.belongsTo(models.OrderItem, {
        foreignKey: "orderItemId",
        hooks: true,
        otherKey: "id",
      });
      // Additions
      InstructionModifier.hasMany(models.Modifier, {
        foreignKey: "modifierId",
        hooks: true,
        otherKey: "id",
      });
    }
  }
  InstructionModifier.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      orderItemId: {
        type: DataTypes.INTEGER,
        references: {
          model: "OrderItem",
          key: "id",
        },
      },
      modifierId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Modifier",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "InstructionModifier",
    }
  );
  return InstructionModifier;
};
