const express = require("express");

const { readAllEntry } = require("../../utils/crud");

 

const router = express.Router();

router.get("/all", async (req, res) => {
  let result = await readAllEntry("Item");
  res.status(200).json({ "Items:": result });
  try {
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
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
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET All Items of a certain type
router.get("/:type", async (req, res) => {
  try {
    const type = req.params.type;
    const items = await readEntryByAggerate("Item", {
      where: { type: type },
    });
    if (!items) {
      return res.status(404).json({ message: "Item not found" });
    }
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
