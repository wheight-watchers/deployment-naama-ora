const express= require('express');
const controller=require('../MongoControllers/account.MongoController')
const router=express.Router();

router.get('/login/user',controller.userLogin);
router.get('/login/manager',controller.managerLogin);