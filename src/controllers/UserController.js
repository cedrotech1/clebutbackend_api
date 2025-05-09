import db from "../database/models/index.js";
const {Users} = db;
import bcrypt from 'bcryptjs'; // or use `bcrypt` if installed

const { body, validationResult } = require("express-validator");

// Validation logic
const validateUserInput = async (req) => {
  await body("firstname").notEmpty().withMessage("Firstname is required").run(req);
  await body("lastname").notEmpty().withMessage("Lastname is required").run(req);
  await body("email").isEmail().withMessage("Valid email is required").run(req);
  await body("phone").notEmpty().withMessage("Phone is required").run(req);
  await body("role")
    .isIn(["member", "system_admin", "campany_admin"])
    .withMessage("Role must be member, system_admin, or campany_admin")
    .run(req);

  return validationResult(req);
};

// Create user


exports.createUser = async (req, res) => {
  const errors = await validateUserInput(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    // Check if phone number exists
    const phoneExist = await Users.findOne({ where: { phone: req.body.phone } });
    if (phoneExist) {
      return res.status(400).json({ success: false, message: "Phone number has been used" });
    }

    // Check if email exists
    const emailExist = await Users.findOne({ where: { email: req.body.email } });
    if (emailExist) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    // Hash the password before saving
    let password='1234';
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const user = await Users.create(req.body);
    res.status(201).json({ message: "User created successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};



// Get all users
exports.getAllUsers = async (req, res) => {
    try {
      const users = await Users.findAll({
        attributes: { exclude: ["password"] },
      });
      res.json({
        message:"users retrieved successfully",
        data: users} );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.update(req.body);
    res.json({ message: "User updated successfully", data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
