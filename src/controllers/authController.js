import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../database/models/index.js";
const {Users} = db;

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Input validation
  if (!email?.trim()) {
    return res.status(400).json({ success: false, message: "Please provide email" });
  }
  if (!password?.trim()) {
    return res.status(400).json({ success: false, message: "Please provide password" });
  }

  try {
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    if (user.status !== "active") {
      return res.status(403).json({ success: false, message: "Your account is not active" });
    }

    const token = generateToken(user.id);

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        role: user.role,
     
     
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// JWT generator
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
