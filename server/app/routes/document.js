const express = require('express');
const router = express.Router();
const DocumentController = require('../controllers/DocumentController');

router.delete('/:id/delete', DocumentController.delete);
router.put('/:id/update', DocumentController.update);
router.post('/create', DocumentController.create);
router.get('/', DocumentController.index);

module.exports = router;