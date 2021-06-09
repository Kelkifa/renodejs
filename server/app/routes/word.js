const express = require('express');
const router = express.Router();
const WordController = require('../controllers/WordController');

router.delete('/:id/delete', WordController.delete);
router.put('/:id/update', WordController.update);
router.post('/find', WordController.FindWord);
router.post('/store', WordController.store);
router.get('/', WordController.index);

module.exports = router;