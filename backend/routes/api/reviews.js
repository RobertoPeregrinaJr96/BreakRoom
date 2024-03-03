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

// GET all Review
router.get("/", async (req, res) => {
  try {
    let result = await readAllEntry("Review");
    res.status(200).json({ "Reviews:": result });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
// GET Review by ID
router.get("/:reviewId", async (req, res) => {
  try {
    const review = await readEntryById("Review", req.params.reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
// GET Review by UserId
router.get("/:userId", async (req, res) => {
  try {
    const userReviews = await readEntryByAggerate("Review", {
      where: {
        userid: req.params.userId,
      },
    });
    if (!userReviews) {
      return res.status(404).json({ message: "User has no reviews" });
    }
    return res.status(200).json(userReviews);
  } catch (error) {
    return res.status(500).json({ message: "Internal Sever Error" });
  }
});
module.exports = router;
