const express= require('express');
const controller=require('../MongoControllers/diary.MongoController')

const router=express.Router();

router.get('/:id/diary',controller.getDiaryByUserId);
router.post('/:id/diary',controller.addDiary);
router.put('/:id/diary/:id',controller.updateDiary);
router.delete('/:id/diary/:id',controller.deleteDairy);

module.exports = router;