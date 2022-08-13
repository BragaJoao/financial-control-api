const router = require('express').Router();
const incomeController = require('./income.controller');

router.get('', incomeController.getAllIncomes);

module.exports = router;