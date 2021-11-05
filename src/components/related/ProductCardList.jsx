import React, { useState, useEffect } from 'react';
import styles from './related.module.css';
import ProductCard from './ProductCard.jsx';
import {useProductContext} from '../../context/ProductContext.jsx';

const ProductCardList = () =>{
  const { related } = useProductContext();

  return (
    <div className={styles.productCardList}>
      {Object.values(related).map((result, index) => {
        return <ProductCard
        relatedProduct={result}
        key={index}
        />
      })}
    </div>
  );
}

export default ProductCardList;



// import axios from 'axios';
// import { API_KEY } from '../../../config/config.js';

// const [relatedID , setRelatedID] = useState([]);
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