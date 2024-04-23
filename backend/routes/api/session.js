const express = require("express");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
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

const validateLogin = [
  check("credential")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Email or username is required."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required."),
  handleValidationErrors,
];
// Restore session user
router.get("/", async (req, res, next) => {
  try {
    const { user } = req;
    if (!user) {
      return res.status(200).json({ user: null });
    } else {
      const safeUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        profileImageUrl: user.profileImageUrl,
        phoneNumber: user.phoneNumber,
      };
      return res.json({ user: safeUser });
    }
  } catch (error) {
    console.error({
      error: "Error restoring session user:",
      Route: "api/session",
    });
    return next(error);
  }
});

// Log in /api/session/
router.post("/", validateLogin, async (req, res, next) => {
  try {
    const { credential, password } = req.body;
  
    // Fetch user with provided credential
    const user = await User.findOne({
      where: {
        [Op.or]: [
          { username: credential },
          { email: credential }
        ]
      }
    });
  
    // If user is not found or password is incorrect
    if (!user || !(await bcrypt.compare(password, user.hashedPassword))) {
      throw createError(401, "Unauthorized", "The provided credentials were invalid.");
    }
  
    // Construct safe user object to send in response
    const responseUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      username: user.username,
      profileImageUrl: user.profileImageUrl,
    };
  
    // Set token cookie for authentication
    setTokenCookie(res, responseUser);
  
    // Send success response with safe user object
    return res.status(200).json({ user: responseUser });
  } catch (error) {
    // Handle errors
    return next(error);
  }
});

// Log out
router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "Logout successful" });
});

// Error handling middleware
router.use((err, req, res, next) => {
  console.error("An error occurred:", err);
  return res.status(500).json({ error: "Internal Server Error" });
});
module.exports = router;
