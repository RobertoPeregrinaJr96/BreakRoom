const express = require("express");
const { Sequelize } = require("../../db/models");
const {
  readAllEntry,
  readOneEntriesByFilter,
  readAllEntriesByFilter,
} = require("../../utils/crud");
const { Item } = require("../../db/models/item");

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    let result = await readAllEntry("Item");
    res.status(200).json({ "Items:": result });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", Route: "api/item/all" });
  }
});

// GET Item by ID
router.get("/:itemId", async (req, res) => {
  try {
    const order = await readEntryById("Item", req.params.itemId);
    if (!order) {
      return res.status(404).json({ message: "Item not found" });
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", Route: "api/item/:itemId" });
  }
});

// GET All Items of a certain type
router.get("/:type/all", async (req, res) => {
  try {
    const type = req.params.type;
    const items = await readAllEntriesByFilter("Item", {
      where: { type: type },
      order: [[Sequelize.literal("totalReviewScore"), "DESC"]],
    });
    if (!items) {
      return res.status(404).json({ message: "Item not found" });
    }
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", Route: "api/item/:type/all" });
  }
});

// GET All Items that will display on the Menu by Type
router.get("/menu", async (req, res) => {
  console.log("Menu");
  // const items = await readAllEntriesByFilter("Item", {
  //   order: [
  //     [Sequelize.literal("type"), "ASC"], 
  //     [Sequelize.literal("name"), "ASC"], 
  //   ],
  // });
  try {
    const items = await Item.findAll();
    console.log(items);
    res.status(200).json({ items: items });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", Route: "api/item/menu" });
  }
});

router.get("/:type/review", async (req, res) => {
  const type = req.params.type;
  const item = await readOneEntriesByFilter("Item", {
    where: { type: type },
    order: [[Sequelize.literal("totalReviewScore"), "DESC"]],
    limit: 1,
  });
  try {
    if (item) {
      return res.status(200).json(item);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", Route: "api/item/:type/review" });
  }
});
module.exports = router;
