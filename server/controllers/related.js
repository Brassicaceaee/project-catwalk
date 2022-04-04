//related product - outfit list
var storedOutfit = {};


module.exports = {
  getOutfit: (req, res) => {
    res.send(storedOutfit);
  },
  postOutfit: (req, res) => {
    // console.log(req.body)
    const productID = req.body.productID;
    const productInfo = req.body.productInfo;
    storedOutfit[productID] = productInfo
    res.sendStatus(201);
  },
  deleteOutfit: (req, res) => {
    const productID = req.body.storedOutfitID;
    delete storedOutfit[productID]
    res.sendStatus(202);
  }
}

