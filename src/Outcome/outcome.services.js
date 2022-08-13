const Outcome = require("./Outcome");

const getAllOutcomes = async () => {
  const outcomes = await Outcome.find();
  return outcomes;
};

module.exports = {
  getAllOutcomes,
};