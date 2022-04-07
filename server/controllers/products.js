const axios = require('axios');
const { API_KEY } = require('../../config/config.js')

let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
let options = {
  headers: {'Authorization': API_KEY}
};


// module.exports = {

//   getProducts: (req, res) => {
//     axios.get(`${url}/products/${productId}`, options)
//     .then(result => product.info = result.data)
//   },
//   getProductStyles: (req, res) => {
//     axios.get(`${url}/products/${productId}/styles`, options)
//     .then(result => product.styles = result.data)
//   }
// }

module.exports = {
  getOverviewData: (req, res) => {
    const productId = req.query.product_id
    const overviewData = {};

    Promise.all([
      axios.get(`${url}/products/${productId}`, options),
      axios.get(`${url}/products/${productId}/styles`, options)
    ])
    .then(result => {
      overviewData.info = result[0].data;
      overviewData.styles = result[1].data;
      res.send(overviewData);
    })
  }
}