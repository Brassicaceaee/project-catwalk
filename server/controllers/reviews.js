const axios = require('axios');
const { API_KEY } = require('../../config/config');

let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
let options = {
  headers: {'Authorization': API_KEY}
}

const calculateAverage = require('../helpers/calculateAverage')

let rating = {}

module.exports = {
  getRelatedProductAvgRating: (req, res) => {
    const relatedId = req.params.id
    axios.get(`${url}/reviews/meta?product_id=${relatedId}`, options)
    .then( results => {
      rating[relatedId] = calculateAverage(results.data.ratings).average
      return rating
    })  
    .then( rating => res.status(200).send(rating))
    .catch(err => console.log("rating err", err))
  },
  markReviewHelpful: (req, res) => {
    let review_id = req.query.review_id;
    console.log(review_id);
    axios.put(`${url}/reviews/${review_id}/helpful`, {}, options)
    .then((result) => {
      res.sendStatus(result.status)
    })
    .catch((err) => {
      console.log(err);
    })
  }, 
  reportReview: (req, res) => {
    let review_id = req.query.review_id;
    console.log(review_id);
    axios.put(`${url}/reviews/${review_id}/report`, {}, options)
    .then((result) => {
      res.sendStatus(result.status)
    })
    .catch((err) => {
      console.log(err);
    })
  }
}