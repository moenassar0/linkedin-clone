const { Router } = require('express');
const router = Router();
const { createUser } = require('../controllers/UserController');


router.post('/users', createUser);

module.exports = router;