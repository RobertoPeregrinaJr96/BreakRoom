"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class InstructionModifier extends Model {
    static associate(models) {
      // Belongs To OrderItem (Each InstructionModifier belongs to an OrderItem)
      InstructionModifier.belongsTo(models.OrderItem, {
        foreignKey: "orderItemId", // Foreign key in InstructionModifier table
      });

      // Has Many Modifiers (Each InstructionModifier has many Modifiers)
      InstructionModifier.hasMany(models.Modifier, {
        foreignKey: "instructionModifierId", // Foreign key in Modifier table
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
        allowNull: false,
        references: {
          model: "OrderItem", // Referencing the OrderItem model
          key: "id",
        },
      },
      modifierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Modifier", // Referencing the Modifier model
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