
const express = require('express');
const router = express.Router();
const { postQuestion } = require('../controllers/questions');


// Post a Question
router.post('/', postQuestion );

module.exports = router;