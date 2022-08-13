const outcomeService = require("./outcome.services");

const getAllOutcomes = async (req, res) => {
  try {
    const outcomes = await outcomeService.getAllOutcomes();
    if (outcomes.length === 0) {
      return res
        .status(400)
        .send({ message: "There is no outcome registered!" });
    }
    res.status(200).send({
      outcomes,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAllOutcomes,
};
