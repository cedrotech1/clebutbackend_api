const express = require("express");
const {createUser,getAllUsers,getUserById,updateUser,deleteUser} = require("../controllers/UserController");
import { protect } from '../middlewares/protect.js';
const router = express.Router();

// Routes
router.post("/",protect,createUser);
router.get("/",protect,getAllUsers);
router.get("/:id",protect,getUserById);
router.put("/:id",protect,updateUser);
router.delete("/:id",protect,deleteUser);

module.exports = router;
