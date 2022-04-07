const express = require('express');
const router = express.Router();
const { getOverviewData } = require('../controllers/products.js');

router.get('/', getOverviewData)

module.exports = router;