import express from "express";
import { register, login } from "../controllers/authController.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/authValidator.js";
import validate from "../middleware/validate.js";

const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Yogesh
 *             email: yogesh@gmail.com
 *             password: "123456"
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/register", registerValidator, validate, register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user and get token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: yogesh@gmail.com
 *             password: "123456"
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", loginValidator, validate, login);

export default router;
