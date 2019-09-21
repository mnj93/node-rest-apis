const express = require('express');
const router = express.Router();
// const validate = require('express-validation');
const USER_CONTROLLER = require('../controllers/user');
const authenticate = require('../middlewares/authenticate');


router.post('/',USER_CONTROLLER.CREATE_USER);
router.get('/dashboard', authenticate, USER_CONTROLLER.DASHBOARD);



module.exports = router;
