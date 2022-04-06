const axios = require('axios');
const { API_KEY } = require('../../config/config');

let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
let options = {
  headers: {'Authorization': API_KEY}
}

module.exports = {
  postQuestion: (req, res) => {
    const {body, name, email} = req.body;
    const  product_id = parseInt(req.body.product_id)
    let data = { body, name, email, product_id}
    axios.post(`${url}/qa/questions`,data, options)
    .then(results => {
      console.log('result post at the server', results)
      res.sendStatus(201)
    })
    .catch(err => {
      console.log('err', err)
      res.sendStatus(500)
    })
  }
}