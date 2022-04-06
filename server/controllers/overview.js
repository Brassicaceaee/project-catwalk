const axios = require('axios');
const { API_KEY } = require('../../config/config.js')

let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
let options = {
  headers: {'Authorization': API_KEY}
}
const calculateAverage = require('../helpers/calculateAverage')

module.exports.getProduct = (req, res) => {
  // debugger;
  let productId = req.query.product_id

  let product = {}


  Promise.all([
    axios.get(`${url}/products/${productId}`, options),
    axios.get(`${url}/products/${productId}/styles`, options),
    axios.get(`${url}/products/${productId}/related`, options),
    axios.get(`${url}/reviews?product_id=${productId}`, options),
    axios.get(`${url}/reviews/meta?product_id=${productId}`, options),
    axios.get(`${url}/qa/questions?product_id=${productId}&count=50`, options),
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
      res.status(200).send(product)
    })
    .catch((error) => {
      debugger;
    })

  })
  .catch((err) => {
    // debugger;
    console.log(err)
  });
}
