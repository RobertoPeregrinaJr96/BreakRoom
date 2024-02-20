const express = require("express");

const { readEntry } = require("../../utils/crud");

const {
  User,
  Item,
  Order,
  OrderItem,
  InstructionModifier,
  Modifier,
  Review,
} = require("../../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let result = await readEntry("Item");
    res.status(200).json({ "Items:": result });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
