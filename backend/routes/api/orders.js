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
router.get("/current", async (req, res) => {
  const { user } = req;
  try {
    const order = await Order.unscoped().findAll({
      where: { userId: user.id, status: "pending" },
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Item,
              attributes: [
                "id",
                "name",
                "price",
                "description",
                "defaultModifiers",
                "itemImage",
                "waitTime",
                "type",
                "totalReviewScore",
              ],
            },
            {
              model: InstructionModifier,
              include: [
                {
                  model: Modifier,
                  attributes: ["id", "name", "price"],
                },
              ],
            },
          ],
          attributes: [
            "id",
            "orderId",
            "itemId",
            "customInstruction",
            "quantity",
          ], // Include the OrderItem attributes here
        },
      ],
    });
    if (!order) {
      return res
        .status(404)
        .json({ message: "Order not found", Route: "api/order/current" });
    }

    // Normalize the data
    const normalizedOrder = order.map((order) => ({
      id: order.id,
      userId: order.userId,
      orderDate: order.createdAt,
      orderUpdated: order.updatedAt,
      orderItems: order.OrderItems.map((orderItem) => ({
        id: orderItem.id,
        orderId: orderItem.orderId,
        itemId: orderItem.itemId,
        quantity: orderItem.quantity,
        customInstruction: orderItem.customInstruction,
        item: {
          id: orderItem.Item.id,
          name: orderItem.Item.name,
          price: orderItem.Item.price,
          description: orderItem.Item.description,
          defaultModifiers: orderItem.Item.defaultModifiers,
          itemImage: orderItem.Item.itemImage,
          waitTime: orderItem.Item.waitTime,
          type: orderItem.Item.type,
          totalReviewScore: orderItem.Item.totalReviewScore,
        },
        modifiers: orderItem.InstructionModifiers.map(
          (instructionModifier) => ({
            id: instructionModifier.id,
            modifierId: instructionModifier.modifierId,
            modifierName: instructionModifier.Modifier.name,
            modifierPrice: instructionModifier.Modifier.price,
          })
        ),
      })),
    }));
    return res.status(200).json(normalizedOrder);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", Route: "api/order/:id" });
  }
});

module.exports = router;
