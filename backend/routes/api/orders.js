const express = require("express");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
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

// GET all Order
router.get("/", async (req, res) => {
  try {
    let result = await readAllEntry("Order");
    res.status(200).json({ "Orders:": result });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
// GET Order by ID
router.get("/:orderId", async (req, res) => {
  try {
    const order = await readEntryById("Order", req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
