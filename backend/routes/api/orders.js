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
      attributes: [
        "id",
        "userId",
        "totalCost",
        "status",
        "pointsEarned",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: OrderItem,
          attributes: [
            "id",
            "orderId",
            "itemId",
            "customInstruction",
            "quantity",
          ],
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
              attributes: ["id", "orderItemId", "modifierId"],
              include: [
                {
                  model: Modifier,
                  attributes: ["id", "name", "price"],
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
        .json({ message: "Order not found", Route: "api/order/current" });
    }

    // Normalize the data
    const normalizedOrder = order.map((orderItem) => ({
      id: orderItem.id,
      userId: orderItem.userId,
      totalCost: orderItem.totalCost,
      status: orderItem.status,
      pointsEarned: orderItem.pointsEarned,
      orderDate: orderItem.createdAt,
      orderUpdated: orderItem.updatedAt,
      orderItems: orderItem.OrderItems.map((item) => ({
        id: item.id,
        orderId: item.orderId,
        itemId: item.itemId,
        quantity: item.quantity,
        customInstruction: item.customInstruction,
        item: {
          id: item.Item.id,
          name: item.Item.name,
          price: item.Item.price,
          description: item.Item.description,
          defaultModifiers: item.Item.defaultModifiers,
          itemImage: item.Item.itemImage,
          waitTime: item.Item.waitTime,
          type: item.Item.type,
          totalReviewScore: item.Item.totalReviewScore,
        },
        modifiers: item.InstructionModifiers.map((instructionModifier) => ({
          id: instructionModifier.id,
          modifierId: instructionModifier.modifierId,
          modifierName: instructionModifier.Modifier.name,
          modifierPrice: instructionModifier.Modifier.price,
        })),
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
