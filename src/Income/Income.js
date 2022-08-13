const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
  descrption: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
});

const Income = mongoose.model("Income", IncomeSchema, "incomes");

module.exports = Income;
