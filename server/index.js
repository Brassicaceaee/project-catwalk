const axios = require('axios');
const express = require('express');
const { API_KEY } = require('../config/config.js')
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.static('dist'))

let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
let options = {
  headers: {'Authorization': API_KEY}
}
  
app.get('/products', (req, res) => {
  let productId = req.query.product_id

  let product = {}


  Promise.all([
    axios.get(`${url}/products/${productId}`, options),
    axios.get(`${url}/products/${productId}/styles`, options),
    axios.get(`${url}/products/${productId}/related`, options),
    axios.get(`${url}/reviews?product_id=${productId}`, options),
    axios.get(`${url}/reviews/meta?product_id=${productId}`, options),
    axios.get(`${url}/qa/questions?product_id=${productId}`, options),
    axios.get(`${url}/cart`, options)
  ])
  .then((result) => {
    product.info = result[0].data;
    product.styles = result[1].data;
    product.related_ids = result[2].data;
    product.reviews = result[3].data;
    product.meta = result[4].data;
    let {total, average} = calculateAverage(product.meta.ratings)
    product.meta.total = total;
    product.meta.average = average;
    product.questions = result[5].data;
    product.cart = result[6].data;
    product.answers = {};
    product.related = {};

    // Get all the answers
    let answerPromises = [];

    product.questions.results.forEach(({question_id}) => {
      answerPromises.push(axios.get(`${url}/qa/questions/${question_id}/answers`, options))
    })

    let relatedProducts = [];
    let relatedStyles = [];

    product.related_ids.forEach((product_id) => {
      relatedProducts.push(axios.get(`${url}/products/${product_id}`, options))
      relatedStyles.push(axios.get(`${url}/products/${product_id}/styles`, options))
    })

    Promise.all(answerPromises)
    .then((results) => {
      results.forEach(({data}) => {
        product.answers[data.question] = data.results;
      })
      return Promise.all([Promise.all(relatedProducts), Promise.all(relatedStyles)]);
    })
    .then((results) => {
      for (var i = 0; i < results[0].length; i++) {
        let relatedProduct = results[0][i].data;
        let relatedStyles = results[1][i].data.results;
        if (product.related[relatedProduct.id] === undefined) {
          product.related[relatedProduct.id] = {};
        }
        product.related[relatedProduct.id].info = relatedProduct;
        product.related[relatedProduct.id].styles = relatedStyles;
      }
      // res.send(200, product);
      res.status(200).send(product)
    })
    .catch((error) => {
      debugger;
    })

  })
  .catch((err) => {
    debugger;
  });
});


//related product - outfit list
var storedOutfit = {};

// get outfit list data
app.get('/outfit', (req, res) => {
  res.send(storedOutfit);
});

// add product to outfit list
app.post('/outfit', (req, res) => {
  // console.log(req.body)
  const productID = req.body.productID;
  const productInfo = req.body.productInfo;
  storedOutfit[productID] = productInfo
  res.sendStatus(201);
});

// delete data from outfit List
app.delete('/outfit', (req, res) => {
  const productID = req.body.storedOutfitID;
  delete storedOutfit[productID]
  res.sendStatus(202);
});


// Items stored in users cart
var cartItems = {};

// add item sku and quantity to list
app.post('/cart/:skuID', (req, res) => {

  let quantity = parseInt(req.body.quantity);
  let skuID = req.params.skuID;

  cartItems[skuID] = quantity

  res.sendStatus(201)
})

//Retrieve list of items user has in cart (sku and quantity)
app.get('/cart', (req, res) => {
  let itemList = []
  let cartItemEntries = Object.entries(cartItems);
  for(let i=0; i < cartItemEntries.length; i++) {

    itemList.push({"sku_id": cartItemEntries[i][0],
                  "count": cartItemEntries[i][1]})
  }
  res.status(200).send(itemList);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



// Helper function
const calculateAverage = (ratings) => {
  let average = 0;
  let total = 0;
  let weightedTotal = 0;
  for (let key in ratings) {
    let starCount = parseInt(key);
    let count = parseInt(ratings[key]);
    total += count;
    weightedTotal += count * starCount;
  }
  average = Math.round((weightedTotal / total) * 10) / 10;
  return {total, average};
}



// Q & A

app.post('/qa/questions', (req, res) => {
  let body = req.body.body;
  let name = req.body.name;
  let email = req.body.email;
  let product_id = req.body.product_id;
  let data = {
    body: body,
    name: name,
    email: email,
    product_id: parseInt(product_id)
  }

  axios.post(`${url}/qa/questions`,data, options)
  .then(results => {
    console.log('result post at the server', results)
    res.sendStatus(201)
  })
  .catch(err => {
    console.log('err', err)
    res.sendStatus(500)
  })
});


// REVIEWS

// Mark a review as helpful
app.put('/rev/helpful', (req, res) => {
  let review_id = req.query.review_id;
  console.log(review_id);
  axios.put(`${url}/reviews/${review_id}/helpful`, {}, options)
  .then((result) => {
    res.sendStatus(result.status)
  })
  .catch((err) => {
    console.log(err);
  })
})

// Report a review
app.put('/rev/report', (req, res) => {
  let review_id = req.query.review_id;
  console.log(review_id);
  axios.put(`${url}/reviews/${review_id}/report`, {}, options)
  .then((result) => {
    res.sendStatus(result.status)
  })
  .catch((err) => {
    console.log(err);
  })
})

