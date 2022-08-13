const router = require('express').Router();
const incomeController = require('./income.controllers');

router.get('', incomeController.getAllIncomes);

module.exports = router;