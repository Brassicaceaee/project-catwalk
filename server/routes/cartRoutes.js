const express = require('express');
const { addToCart, getCartItems } = require('../controllers/cart');
const router = express.Router();


// add item sku and quantity to list
router.post('/:skuID', addToCart )

//Retrieve list of items user has in cart (sku and quantity)
router.get('/', getCartItems)

module.exports = router;