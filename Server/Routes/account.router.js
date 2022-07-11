const express= require('express');
const controller=require('../Controllers/account.controller')

const router=express.Router();

router.get('/login',controller.login);
// router.post('/signUp',controller.signUp);

module.exports=router;