const router = require("express").Router();
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");
// my routes
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const itemRouter = require("./items.js");
const orderRouter = require("./orders.js");
const orderItemsRouter = require("./orderItems.js");
const reviewRouter = require("./reviews.js");
// my active routes
router.use(restoreUser);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/items", itemRouter);

router.use("/orders", orderRouter);

router.use("/orderItems", orderItemsRouter);

router.use("/review", reviewRouter);

// POST /api/test
router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

// GET /api/test
router.get("/test", async (req, res) => {
  let message = req.body;
  res.json({ message: "this is a gnarly message" });
});

// GET /api/set-token-cookie
router.get("/set-token-cookie", async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: "Demo-lition",
    },
  });
  setTokenCookie(res, user);
  return res.json({ user: user });
});

// GET /api/restore-user
router.get("/restore-user", (req, res) => {
  return res.json(req.user);
});

// GET /api/require-auth
router.get("/require-auth", requireAuth, (req, res) => {
  return res.json(req.user);
});
module.exports = router;
