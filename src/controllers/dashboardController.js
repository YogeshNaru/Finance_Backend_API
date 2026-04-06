import mongoose from "mongoose";
import Record from "../models/Record.js";

const getSummary = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const data = await Record.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $group: { _id: "$type", total: { $sum: "$amount" } } },
    ]);

    let income = 0;
    let expense = 0;

    data.forEach((item) => {
      if (item._id === "income") income = item.total;
      if (item._id === "expense") expense = item.total;
    });
    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense,
    });
  } catch (error) {
    next(error);
  }
};

const getCategorySummary = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const data = await Record.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $group: { _id: "$category", total: { $sum: "$amount" } } },
    ]);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getMonthlyTrends = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const data = await Record.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: {
            month: { $month: "$date" },
            type: "$type",
          },
          total: { $sum: "$amount" },
        },
      },
      { $sort: { "_id.month": 1 } },
    ]);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export { getSummary, getCategorySummary, getMonthlyTrends };
