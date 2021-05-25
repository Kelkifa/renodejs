const express = require('express');
const router = express.Router();
const DocumentController = require('../controllers/DocumentController');

router.post('/create', DocumentController.create);
router.get('/', DocumentController.index);

module.exports = router;