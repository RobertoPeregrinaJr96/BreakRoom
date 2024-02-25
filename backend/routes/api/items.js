const express = require("express");

const { readAllEntry } = require("../../utils/crud");

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
    let result = await readAllEntry("Item");
    res.status(200).json({ "Items:": result });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
