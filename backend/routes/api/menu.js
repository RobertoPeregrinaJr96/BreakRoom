const express = require("express");
const { Sequelize } = require("../../db/models");
const { readAllEntriesByFilter } = require("../../utils/crud");

const router = express.Router();

// GET All Items that will display on the Menu by Type
router.get("/", async (req, res) => {
  console.log("Menu");

  try {
    const items = await readAllEntriesByFilter("Item", {
      order: [
        [Sequelize.literal("type"), "ASC"],
        [Sequelize.literal("name"), "ASC"],
      ],
    });
    console.log(items);
    res.status(200).json({ items: items });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", Route: "api/menu" });
  }
});
module.exports = router;
