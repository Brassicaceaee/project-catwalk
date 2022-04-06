
// Items stored in users cart
var cartItems = {};

module.exports = {
  addToCart: (req, res) => {

    let quantity = parseInt(req.body.quantity);
    let skuID = req.params.skuID;
  
    cartItems[skuID] = quantity
  
    res.sendStatus(201)
  },
  getCartItems: (req, res) => {
    let itemList = []
    let cartItemEntries = Object.entries(cartItems);
    for(let i=0; i < cartItemEntries.length; i++) {
  
      itemList.push({"sku_id": cartItemEntries[i][0],
                    "count": cartItemEntries[i][1]})
    }
    res.status(200).send(itemList);
  }
}