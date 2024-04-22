const express = require("express");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const {
  readAllEntry,
  readEntryByAggerate,
  readAllEntriesByFilter,
} = require("../../utils/crud");

const { OrderItem, InstructionModifier } = require("../../db/models");

const router = express.Router();

// GET all Order
router.get("/all", async (req, res) => {
  try {
    let result = await readAllEntry("Order");
    res.status(200).json({ "Orders:": result });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", Route: "api/order/all" });
  }
});
// GET Order by ID
router.get("/:userId", async (req, res) => {
  try {
    const order = await readEntryByAggerate("Order", {
      where: { userId: req.params.userId, status: "pending" },
    });
    // console.log("====order====", order);

    const orderItems = await readAllEntriesByFilter("OrderItem", {
      where: { orderId: order[0].id },
    });
    // console.log("====orderItems====", orderItems);

    const xx = await readAllEntriesByFilter('Order', {
      include: [
        {
          model: OrderItem,
          include: InstructionModifier,
        },
      ],
    });
    console.log("====xx====", xx);

    if (!order) {
      return res
        .status(404)
        .json({ message: "Order not found", Route: "api/order/:id" });
    }
    if (!orderItems) {
      return res
        .status(404)
        .json({ message: " Items in order not found", Route: "api/order/:id" });
    }

    const safeResponse = { order: [...order], orderItems: [...orderItems] };
    console.log("====safeResponse====", safeResponse);

    return res.status(200).json(safeResponse);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", Route: "api/order/:id" });
  }
});

module.exports = router;
