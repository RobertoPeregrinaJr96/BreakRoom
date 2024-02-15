const express = require("express");
const bcrypt = require("bcryptjs");
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
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { singleFileUpload, singleMulterUpload } = require("../../awsS3");

const router = express.Router();

const validateSignup = [
  check("firstName")
    .exists({ checkFalsy: true })
    .isString()
    .withMessage("First Name is required"),
  check("lastName")
    .exists({ checkFalsy: true })
    .isString()
    .withMessage("Last Name is required"),
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

module.exports = router;
