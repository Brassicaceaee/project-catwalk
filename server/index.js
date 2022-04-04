const axios = require('axios');
const express = require('express');
const { API_KEY } = require('../config/config.js')
const app = express();
const port = 3000;
const { getProduct } = require('./controllers/overview.js');
const cartRoutes = require('./routes/cartRoutes.js');
const productRoute = require('./routes/productRoutes.js');
const relatedRoutes = require('./routes/relatedRoutes.js');
app.use(express.json())
app.use(express.static('dist'))

let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
let options = {
  headers: {'Authorization': API_KEY}
}

// app.get('/products', getProduct);
app.use('/products', productRoute)
app.use('/outfit', relatedRoutes)
app.use('/', cartRoutes)

let rating = {}
//get avgerage rating from related product
app.get('/rating/:id', (req, res) => {
  const relatedId = req.params.id
  axios.get(`${url}/reviews/meta?product_id=${relatedId}`, options)
  .then( results => {
    rating[relatedId] = calculateAverage(results.data.ratings).average
    return rating
  })
  .then( rating => res.status(200).send(rating))
  .catch(err => console.log("rating err", err))
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
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

// Post a Question
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

