const express = require('express');
const controller = require('./book.controller');

const { isAuthenticated } = require('../../helpers/auth');

const router = express.Router();

router.get('/', isAuthenticated, controller.list);

module.exports = router;
