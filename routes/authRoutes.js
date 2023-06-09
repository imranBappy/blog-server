const { authGetController, singinPostController, signupController, resetController, updateController } = require('../controllers/authControllers');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = require('express').Router();


router.get('/', isAuthenticated, authGetController);
router.post('/', singinPostController);
router.post('/register', signupController)
router.patch('/update', isAuthenticated, updateController);
router.post('/reset', resetController);


module.exports = router;