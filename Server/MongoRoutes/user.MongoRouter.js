const controller= require('../MongoControllers/user.MongoController')
const diaryController=require('../MongoControllers/diary.MongoController')

const router=express.Router();

router.get('/',controller.getAllUsers);
//router.get('/search',controller.getAllUsers);
router.get('/:id',controller.getUserById);
router.post('/',controller.addUser);
router.put('/:id',controller.updateUserDetails);
router.delete('/:id',controller.removeUser);

router.get('/:id/diary',diaryController.getDiaryByUserId);
router.post('/:id/diary',diaryController.addDiary);
router.put('/:id/diary/:id',diaryController.updateDiary);
router.delete('/:id/diary/:id',diaryController.deleteDairy);