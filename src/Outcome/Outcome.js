const mongoose = require("mongoose");

const OutcomeSchema = new mongoose.Schema({
  description: {
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

const Outcome = mongoose.model("Outcome", OutcomeSchema, "Outcomes");

module.exports = Outcome;