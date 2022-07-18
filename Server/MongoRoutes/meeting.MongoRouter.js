const express= require('express');
const controller=require('../MongoControllers/meeting.MongoController')

const router=express.Router();

router.get('/:id',controller.getAllTheMeetingsForUser);
router.post('/',controller.addMeeting);
router.put('/:id',controller.updateMeeting);
router.delete('/:id',controller.deleteMeeting);

module.exports = router;