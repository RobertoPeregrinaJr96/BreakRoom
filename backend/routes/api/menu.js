const express = require("express");
const { Sequelize } = require("../../db/models");
const { readAllEntriesByFilter } = require("../../utils/crud");

const router = express.Router();

/**
 * GET All Items that will display on the Menu by Type
 * @param {endpoint} "/" - url/menu/
 * @param {req} request - no request body
 * @param {res} response - response with a status code 200 with json data
 */
router.get("/", async (req, res) => {
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
    res.status(500).json({ error: "Internal server error", Route: "api/menu" });
  }
});
module.exports = router;
