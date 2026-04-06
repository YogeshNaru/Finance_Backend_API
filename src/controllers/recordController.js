import Record from "../models/Record.js";

// create record admin only
const createRecord = async (req, res, next) => {
  try {
    const record = await Record.create({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(record);
  } catch (error) {
    next(error);
  }
};

// get records
const getRecords = async (req, res, next) => {
  try {
    const {
      type,
      category,
      startDate,
      endDate,
      page = 1,
      limit = 10,
    } = req.query;
    let filter = {};

    filter.userId = req.user.id;

    if (type) filter.type = type;
    if (category) filter.category = category;
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const records = await Record.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ date: -1 });

    res.json(records);
  } catch (error) {
    next(error);
  }
};

// update records
const updateRecord = async (req, res, next) => {
  try {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });

    res.json(record);
  } catch (error) {
    next(error);
  }
};

// delete record
const deleteRecord = async (req, res, next) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);
    if (!record) {
      return res.status(404).json({ message: "record not found" });
    }
    res.json({ message: "Record deleted", record });
  } catch (error) {
    next(error);
  }
};

export { createRecord, getRecords, updateRecord, deleteRecord };
