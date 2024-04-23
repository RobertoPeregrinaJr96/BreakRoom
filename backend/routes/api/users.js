const express = require("express");
const bcrypt = require("bcryptjs");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { singleFileUpload, singleMulterUpload } = require("../../awsS3");
 
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

const validateSignup = [
  check("firstName").notEmpty().withMessage("First Name is required"),
  check("lastName").notEmpty().withMessage("Last Name is required"),
  check("email").isEmail().withMessage("Please provide a valid email."),
  check("username")
    .isLength({ min: 4 })
    .withMessage("Username must be at least 4 characters."),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// GET current User
router.get("/", requireAuth, async (req, res) => {
  try {
    const { user } = req;
    res.status(200).json({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET user by ID
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Sign up
router.post(
  "/",
  singleMulterUpload("image"),
  validateSignup,
  async (req, res) => {
    try {
      let { email, password, username, firstName, lastName, image, phone } =
        req.body;
      const hashedPassword = bcrypt.hashSync(password, 10);
      const profileImageUrl = req.file
        ? await singleFileUpload({ file: req.file, public: true })
        : null;
      if (phone === "null") phone = null;

      const existingUser = await User.unscoped().findAll({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = await User.create({
        email,
        username,
        hashedPassword,
        firstName,
        lastName,
        profileImageUrl,
        phoneNumber: phone,
      });

      const responseUser = {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        username: newUser.username,
        profileImageUrl: newUser.profileImageUrl,
        phoneNumber: newUser.phoneNumber,
      };

      setTokenCookie(res, responseUser);

      return res.status(201).json({ user: responseUser });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Update User
router.put("/:userId", async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, username, email } = req.body;
    const user = await User.findByPk(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.update({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      username: username,
      email: email,
    });

    const updatedUser = await User.findByPk(req.params.userId);

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// Delete User
router.delete("/:userId", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    return res.status(200).json({ message: "Delete Successful" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
