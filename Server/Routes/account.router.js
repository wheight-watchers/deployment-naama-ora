const express= require('express');
const controller=require('../Controllers/account.controller')

const router=express.Router();

router.get('/login/user',controller.userLogin);
router.get('/login/manager',controller.managerLogin);
// router.post('/signUp',controller.signUp);

module.exports=router;