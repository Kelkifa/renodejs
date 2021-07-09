const express = require('express');
const KeyTrainController = require('../controllers/KeyTrainController');
const router = express.Router();

router.get('/', KeyTrainController.index);

module.exports = router;