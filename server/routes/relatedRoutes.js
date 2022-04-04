const express = require('express');
const router = express.Router();
const { getOutfit, postOutfit, deleteOutfit } = require('../controllers/related.js');


// get outfit list data
router.get('/', getOutfit );

// add product to outfit list
router.post('/', postOutfit );

// delete data from outfit List
router.delete('/', deleteOutfit );

module.exports = router;