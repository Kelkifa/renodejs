const express = require('express');
const router = express.Router();
const DocumentController = require('../controllers/DocumentController');

router.get('/', DocumentController.index);

module.exports = router;