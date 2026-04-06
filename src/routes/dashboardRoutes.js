import express from "express";
import {
  getSummary,
  getCategorySummary,
  getMonthlyTrends,
} from "../controllers/dashboardController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/dashboard/summary:
 *   get:
 *     summary: Get total income, expense, balance
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Summary data
 */
router.get(
  "/summary",
  authMiddleware,
  allowRoles("admin", "analyst"),
  getSummary
);

/**
 * @swagger
 * /api/dashboard/category:
 *   get:
 *     summary: Get category-wise totals
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Category summary returned
 */
router.get(
  "/category",
  authMiddleware,
  allowRoles("admin", "analyst"),
  getCategorySummary
);

/**
 * @swagger
 * /api/dashboard/monthly:
 *   get:
 *     summary: Get monthly financial trends
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Monthly trends returned
 */
router.get(
  "/monthly",
  authMiddleware,
  allowRoles("admin", "analyst"),
  getMonthlyTrends
);

export default router;
