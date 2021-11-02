import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './related.module.css';
import { API_KEY } from '../config/config.js'

const ProductCard = ({relatedID}) =>{
  const[relatedProduct, setRelatedProduct] = useState({});
  const[relatedImg, setRelatedImg]= useState('');
  const[salePrice, setSalePrice] = useState('');
  // const[price, setPrice] = useState('');

  const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products'
  const options = {
    headers: {'Authorization': API_KEY}
  };

  useEffect(() =>{
    // get related product info
    axios.get(`${API_URL}/${relatedID}`, options)
    .then(results => {
      setRelatedProduct(results.data)
    })

    //get related product image
    axios.get(`${API_URL}/${relatedID}/styles`, options)
    .then(result => setRelatedImg(result.data.results[0].photos[0].thumbnail_url))

    // get product sale price
    axios.get(`${API_URL}/${relatedID}/styles`, options)
    .then(result => setSalePrice(result.data.results[0].sale_price))
  }, [])

  // console.log(relatedProduct)
  // console.log(src=relatedImg)
  const isSale = salePrice;

  return(
    <div>
      <h2>This is Product Card ↓ </h2>
        <img src={relatedImg}/>
        <div>{relatedProduct.category}</div>
        <div>{relatedProduct.name}</div>
        {isSale
        ? <div>${salePrice}</div>
        : <div>${relatedProduct.default_price}</div>
        }
      <h2>This is Product Card ↑</h2>
    </div>
  )
}
export default ProductCard;