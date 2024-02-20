const express = require("express");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { readOneEntriesByFilter } = require("../../utils/crud");

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
    console.log("user:", user);
    if (!user) res.status(200).json({ user: null });
    if (user) {
      const safeUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        profileImageUrl: user.profileImageUrl,
        phoneNumber: user.phoneNumber,
      };
      return res.json({
        user: safeUser,
      });
    } else return res.json({ user: null });
  } catch (error) {
    console.error("Error restoring session user:", error);
    return next(error);
  }
});

// Log in /api/session/
router.post("/", validateLogin, async (req, res, next) => {
  try {
    const { credential, password } = req.body;

    // Fetch user with provided credential
    const user = await readOneEntriesByFilter(User, {
      [Op.or]: {
        username: credential,
        email: credential,
      },
    });

    // If user is not found or password is incorrect
    if (
      !user ||
      !(await bcrypt.compare(password, user.hashedPassword.toString()))
    ) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Unauthorized";
      err.errors = { credential: "The provided credentials were invalid." };
      throw err;
    }

    // Construct safe user object to send in response
    const responseUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
    };

    // Set token cookie for authentication
    await setTokenCookie(res, responseUser);

    // Send success response with safe user object
    return res.status(200).json({
      user: responseUser,
    });
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
