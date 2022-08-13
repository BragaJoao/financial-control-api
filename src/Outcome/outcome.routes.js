const router = require('express').Router();
const outcomeController = require('./outcome.controllers');

router.get('', outcomeController.getAllOutcomes);

module.exports = router;