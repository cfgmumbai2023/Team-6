import express from "express";
import { addition, approve } from "../controller/video.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
router.post('/addVideo', verifyToken, addition);
router.post('/approve', verifyToken, approve);
router.post('/disapprove', verifyToken, approve)

export default router;