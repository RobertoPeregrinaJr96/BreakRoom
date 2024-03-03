const express = require("express");
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

// GET all OrderItems
router.get("/", async (req, res) => {
  try {
    let result = await readAllEntry("OrderItem");
    res.status(200).json({ "OrderItems:": result });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
// GET OrderItem by ID
router.get("/:orderItemId", async (req, res) => {
  try {
    const review = await readEntryById("OrderItem", req.params.reviewId);
    if (!review) {
      return res.status(404).json({ message: "OrderItem not found" });
    }
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
// GET OrderItem by Order
router.get("/:orderId", async (req, res) => {
  try {
    const review = await readEntryByAggerate("OrderItem", {
      where: { orderId: req.params.orderId },
    });
    if (!review) {
      return res.status(404).json({ message: "OrderItems not found" });
    }
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
