const express = require('express');
const router = express.Router();
const { register } = require('../../controllers/User/registerController');

router.post('/', register);

module.exports = router;