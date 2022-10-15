const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();
const { createUser, login } = require('../controllers/UserController');


router.post('/users', createUser);
router.post('/login', login);
router.post('/test', authenticateToken, (req, res) => {
    res.status(200).send("gg worked: " + JSON.stringify(req.user));
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}

module.exports = router;