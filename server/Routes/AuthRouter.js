const express = require('express'); 
const router = express.Router();
const { googleLogin,Gusers } = require('../Controller/GauthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const { signup,login, users } = require('../Controller/AuthController');

router.post('/login',loginValidation,login)

router.post('/signup',signupValidation,signup)

router.get('/google',googleLogin)

router.get('/users',users)

router.get('/gusers',Gusers)


module.exports = router;