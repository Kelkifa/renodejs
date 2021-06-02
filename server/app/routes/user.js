const express = require('express')
const router = express.Router();
const UserController = require('../controllers/UserController');
const accessToken = require('../middlewares/access');

router.get('/auth', accessToken, UserController.auth);
router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;