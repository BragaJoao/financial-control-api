const Income = require("./Income");

const getAllIncomes = async () => {
  const incomes = await Income.find();
  return incomes;
};

module.exports = {
  getAllIncomes,
};
