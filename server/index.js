const axios = require('axios');
const express = require('express');
const { API_KEY } = require('../config/config.js')
const app = express();
const port = 3000;

app.use(express.static('dist'))

app.get('/products', (req, res) => {
  let productId = req.query.product_id
  let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
  let options = {
    headers: {'Authorization': API_KEY}
  }

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
    product.related = result[2].data;
    product.reviews = result[3].data;
    product.meta = result[4].data;
    product.questions = result[5].data;
    product.cart = result[6].data;
    product.answers = {};
    // Get all the answers
    let promises = [];

    product.questions.results.map(({question_id}) => {
      promises.push(axios.get(`${url}/qa/questions/${question_id}/answers`, options))
    })


    Promise.all(promises)
    .then((results) => {
      results.map(({data}) => {
        product.answers[data.question] = data.results;
      })
      res.send(200, product);
    })
    .catch((error) => {
      debugger;
    })
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})