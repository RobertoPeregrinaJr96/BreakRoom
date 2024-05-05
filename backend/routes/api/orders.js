const express = require("express");
const { setTokenCookie, requireAuth } = require("../../utils/auth");

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

// GET Order by ID
router.get("/:userId/current", async (req, res) => {
  try {
    const order = await Order.unscoped().findAll({
      where: { userId: req.params.userId,status:"pending" },
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Item,
            },
            {
              model: InstructionModifier,
              include: [
                {
                  model: Modifier,
                },
              ],
            },
          ],
        },
      ],
    });
    if (!order) {
      return res
        .status(404)
        .json({ message: "Order not found", Route: "api/order/:id" });
    }
    const normalizedOrder = {};

    order.forEach((orderItem) => {
      const orderId = orderItem.id;
      const userId = orderItem.userId;
      const orderDate = orderItem.createdAt;
      const orderUpdated = orderItem.updatedAt;

      normalizedOrder[orderId] = {
        id: orderId,
        userId: userId,
        orderDate: orderDate,
        orderUpdated: orderUpdated,
        orderItems: [],
      };

      orderItem.OrderItems.forEach((orderItem) => {
        const orderItemId = orderItem.id;
        const itemId = orderItem.Item.id;
        const itemName = orderItem.Item.name;
        const itemPrice = orderItem.Item.price;

        const modifiers = orderItem.InstructionModifiers.map(
          (instructionModifier) => {
            return {
              id: instructionModifier.id,
              modifierId: instructionModifier.modifierId,
              modifierName: instructionModifier.Modifier.name,
              modifierPrice: instructionModifier.Modifier.price,
            };
          }
        );

        normalizedOrder[orderId].orderItems.push({
          id: orderItemId,
          itemId: itemId,
          itemName: itemName,
          itemPrice: itemPrice,
          modifiers: modifiers,
        });
      });
    });
    return res.status(200).json(normalizedOrder);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", Route: "api/order/:id" });
  }
});

module.exports = router;
