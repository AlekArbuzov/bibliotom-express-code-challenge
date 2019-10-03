const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.post('/signin', controller.signIn);
router.post('/create', controller.create);

module.exports = router;
