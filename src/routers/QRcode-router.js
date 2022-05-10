const express = require('express');
const router = express.Router();
const controller = require('../controllers/criarQRCode.js');

router.post('/', controller.post);

module.exports = router;