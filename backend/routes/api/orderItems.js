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
    let result = await OrderItem.unscoped().findAll();
    res.status(200).json({ "OrderItems:": result });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
// GET OrderItem by ID
router.get("/:orderItemId", async (req, res) => {
  try {
    const review = await OrderItem.findByPk(req.params.reviewId);
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
    const review = await OrderItem.unscoped().findAll({
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
// UPDATE ITEM
router.put("/:orderItemId", async (req, res) => {
  const orderItemId = req.params.orderItemId;
  const orderItem = await OrderItem.findByPk(orderItemId);
  let { quantity } = req.body["data"];
  orderItem.quantity = quantity;
  await orderItem.save();

  res.json(orderItem);
});
router.delete("/:orderItemId", async (req, res) => {
  const id = req.params.orderItemId;
  const orderItem = await OrderItem.findByPk(id);
  await orderItem.destroy();
  res.json({
    Message: "Successfully delete",
  });
});
module.exports = router;
