const { Router } = require('express');
const router = Router();
const { createUser, login } = require('../controllers/UserController');


router.post('/users', createUser);
router.post('/login', login);

module.exports = router;