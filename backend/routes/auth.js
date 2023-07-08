import express from "express";
import { register, login } from "../controller/auth.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
router.post('/register', register);
router.post('/login', verifyToken, login);

export default router;