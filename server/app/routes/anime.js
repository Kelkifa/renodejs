const express = require('express')
const AnimeController = require('../controllers/AnimeController');
const router = express.Router();

router.get('/', AnimeController.index);

module.exports = router;