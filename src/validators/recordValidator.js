import { body, query } from "express-validator";

const createRecordValidator = [
  body("amount")
    .notEmpty()
    .withMessage("Amount is required")
    .isNumeric()
    .withMessage("Amount must be a number"),

  body("type")
    .notEmpty()
    .withMessage("Type is required")
    .isIn(["income", "expense"])
    .withMessage("Invalid type"),

  body("category").trim().notEmpty().withMessage("Category is required"),
];

const getRecordsValidator = [
  query("type").optional().isIn(["income", "expense"]),

  query("page").optional().isInt({ min: 1 }),

  query("limit").optional().isInt({ min: 1 }),
];

export { createRecordValidator, getRecordsValidator };
