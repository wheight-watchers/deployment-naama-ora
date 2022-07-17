const controller= require('../MongoControllers/user.MongoController')
const router=express.Router();

router.get('/',controller.getAllUsers);
//router.get('/search',controller.getAllUsers);
router.get('/:id',controller.getUserById);
router.post('/',controller.addUser);
router.put('/:id',controller.updateUserDetails);
router.delete('/:id',controller.removeUser);