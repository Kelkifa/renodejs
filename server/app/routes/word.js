const express = require('express');
const router = express.Router();
const WordController = require('../controllers/WordController');

router.post('/store', WordController.store);
router.get('/', WordController.index);

module.exports = router;