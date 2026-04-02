import { Router } from "express";
import { createContactMessage } from "../controllers/contactController.js";
import { contactRateLimit } from "../utils/rateLimitStore.js";

const router = Router();

router.post("/", contactRateLimit, createContactMessage);

export default router;
