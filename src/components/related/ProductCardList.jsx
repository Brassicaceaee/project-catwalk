import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './related.module.css';
import { API_KEY } from '../config/config.js'
import ProductCard from './ProductCard.jsx'

const ProductCardList = () =>{
  const [relatedID , setRelatedID] = useState([]);
  // const [relatedProduct, setRelatedproduct] = useState([]);

  const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products'
  const options = {
    headers: {'Authorization': API_KEY}
  };

  useEffect(() => {
    // // get the related product's info
    // axios.get(`${API_URL}/40344/related`,options)
    // .then(response => setRelatedID(response.data))
    // get the related products' id
    axios.get(`${API_URL}/40365/related`,options)
    .then(response => setRelatedID(response.data))
  }, []);

  // console.log(relatedID)

  return (
    <div className={styles.productCardList} >
      <h1>This is Product List ↓ </h1>
      {relatedID.map((result, index) => {
        return <ProductCard
        relatedID={result}
          key={index} />
      })}
       <h1>This is Product List ↑ </h1>
    </div>
  );

}

export default ProductCardList;