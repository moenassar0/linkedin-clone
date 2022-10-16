const { Router } = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const router = Router();
const { createUser, login } = require('../controllers/UserController');
const { createCompany } = require('../controllers/CompanyController');


router.post('/users', createUser);
router.post('/login', login);
router.post('/test', authenticateToken, (req, res) => {
    res.status(200).send("gg worked: " + JSON.stringify(req.user));
})

//Tester
router.post('/image', (req, res) => {
    let data = req.body.data;
    let buff = Buffer.from(data, 'base64');
    fs.writeFileSync('stack-abuse-logo-out.png', buff);
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

router.post('/companies', createCompany);
module.exports = router;