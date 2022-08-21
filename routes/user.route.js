const { Router } = require('express');
const userController = require('../controllers/user.controller');
const router = Router();
const auth = require('../middleware/auth.middleware');

router.post('/register', userController.signup);
router.post('/login', userController.login);
router.get('/user', auth, userController.getUser);

module.exports = router;