const express=require('express');
// const { Router } = require('express');
// const router = Router();
const controller=require('../Controllers/user.controller');
const diaryController=require('../Controllers/diary.controller')

const router=express.Router();

router.get('/',controller.getAllUsers);
router.get('/search',controller.getAllUsers);
router.get('/:id',controller.getUserById);
router.post('/',controller.addUser);
router.put('/:id',controller.updateUserDetails);
router.delete('/:id',controller.removeUser);
router.get('/:id/diary',diaryController.getDiaryByUserId);
router.post('/:id/diary',diaryController.addDiary);
router.put('/:id/diary',diaryController.updateDiary);
router.delete('/:id/diary',diaryController.deleteDairy);

module.exports=router; 