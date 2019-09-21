const express = require('express');
const router = express.Router();
const AUTH = require('../controllers/auth');


router.post('/',AUTH.USER_AUTH);


module.exports = router;

