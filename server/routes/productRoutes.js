const express = require('express');
const router = express.Router();
const { getProduct } = require('../controllers/overview.js');

router.get('/', getProduct)

module.exports = router;