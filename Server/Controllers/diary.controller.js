const dairyService= require('../Services/diary.service')

module.exports.getDiaryByUserId=async function(req,res,next){
    try{
        const userId=req.params.id
        const diary=await dairyService.getDiary(userId);
        res.status(200).send(diary)
    }
    catch(error){
        next(error)
    }
}
module.exports.addDiary=async function(req,res,next){
    try{
        const userId=req.params.id;
        let diary=req.body;
        const diaryAdded=await dairyService.addDiary(userId,diary);
        res.status(200).send(diaryAdded)
    }
    catch(error){
        next(error)
    }
}
module.exports.updateDiary=async function(req,res,next){
    try{
        const userId=req.params.id;
        const diaryDate=req.query.date;
        const newDiary=req.body;
        const updateDairy=await dairyService.updateDiary(userId,diaryDate,newDiary);
        res.status(200).send(updateDairy)
    }
    catch(error){
        next(error)
    }
}
module.exports.deleteDairy=async function(req,res,next){
    try{
        const userId=req.params.id;
        const dairy=req.query.date;
        const updateDairy=await dairyService.deleteDairy(userId,dairy);
        res.status(200).send(updateDairy)
    }
    catch(error){
        next(error)
    }
}