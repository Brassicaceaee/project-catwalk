import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './related.module.css';
import { API_KEY } from '../../../config/config.js';
import ProductCard from './ProductCard.jsx';


const ProductCardList = () =>{
  const [relatedID , setRelatedID] = useState([]);
  const [overviewProduct, setOverviewProduct] = useState({});

  const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products'
  const options = {
    headers: {'Authorization': API_KEY}
  };

  useEffect(() => {
    // get the related products' id
    axios.get(`${API_URL}/40365/related`,options)
    .then(response => setRelatedID(response.data))

    // get the overview product info
    axios.get(`${API_URL}/40365`,options)
    .then(response => setOverviewProduct(response.data))
  }, []);

  // console.log(relatedID)

  return (
    <div className={styles.productCardList}>
      {relatedID.map((result, index) => {
        return <ProductCard
          overviewProduct={overviewProduct}
          relatedID={result}
          key={index}
          />
      })}
    </div>
  );
}

export default ProductCardList;