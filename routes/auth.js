const {Router} = require('express');
const {check} = require('express-validator');
const { login, googleSignIn } = require('../controllers/login');
const { validateFields } = require('../middlewares');

const router = Router();
router.post('/login',[
    check('email','Email is required').isEmail(),
    check('password','Password is required').not().isEmpty(),
    validateFields
], login);
router.post('/google',[
    check('id_token','Token is required').not().isEmpty(),
    validateFields
], googleSignIn );


module.exports = router;
