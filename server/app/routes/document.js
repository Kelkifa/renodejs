const express = require('express');
const router = express.Router();
const DocumentController = require('../controllers/DocumentController');

router.get('/:id/update', DocumentController.getUpdate);
router.post('/create', DocumentController.create);
router.get('/', DocumentController.index);

module.exports = router;