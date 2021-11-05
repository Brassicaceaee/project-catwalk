import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './related.module.css';
import { API_KEY } from '../../../config/config.js';
import ProductCard from './ProductCard.jsx';
import {useProductContext} from '../../context/ProductContext.jsx';

const ProductCardList = () =>{
  const { related } = useProductContext();
  // const [relatedID , setRelatedID] = useState([]);

  // console.log(styles)

  // const [overviewProduct, setOverviewProduct] = useState({});

  // const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products'
  // const options = {
  //   headers: {'Authorization': API_KEY}
  // };

  // useEffect(() => {
  //   // get the related products' id
  //   axios.get(`${API_URL}/40365/related`,options)
  //   .then(response => setRelatedID(response.data))

  //   // get the overview product info
  //   axios.get(`${API_URL}/40365`,options)
  //   .then(response => setOverviewProduct(response.data))
  // }, []);

  // console.log(relatedID)

  return (
    <div className={styles.productCardList}>
      {Object.values(related).map((result, index) => {
        // console.log(result)
        return <ProductCard
          // overviewProduct={overviewProduct}
          relatedProduct={result}
          key={index}
          />
      })}
    </div>
  );
}

export default ProductCardList;