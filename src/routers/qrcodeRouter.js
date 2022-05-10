const express = require('express');
const router = express.Router();

const qrcodeController = require('../controllers/qrcodeController.js');

router.post('/', qrcodeController.post);

module.exports = router;