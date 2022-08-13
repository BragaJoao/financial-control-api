const incomeService = require("./income.services");

const getAllIncomes = async (req, res) => {
  try {
    const incomes = await incomeService.getAllIncomes();
    if (incomes.length === 0) {
      return res
        .status(400)
        .send({ message: "There is no income registered!" });
    }
    res.status(200).send({
      incomes,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAllIncomes,
};
