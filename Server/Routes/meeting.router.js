const express= require('express');
const controller=require('../Controllers/meeting.controller')
const router=express.Router();

router.get('/:id',controller.getAllTheMeetingsForUser);
router.post('/',controller.addMeeting);
router.put('/:id',controller.updateMeeting);
router.delete('/:id',controller.deleteMeeting);

module.exports=router;