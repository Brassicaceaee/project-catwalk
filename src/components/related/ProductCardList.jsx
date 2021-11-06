import React, { useState, useEffect } from 'react';
import styles from './related.module.css';
import ProductCard from './ProductCard.jsx';
import {useProductContext} from '../../context/ProductContext.jsx';
import leftArrow from '../../../asset/img/left-arrow.png';
import rightArrow from '../../../asset/img/right-arrow.png';

const ProductCardList = () =>{
  const { related } = useProductContext();
  const style = { height: '130px', width: '50px'};

  return (
    <div className={styles.productCardList}>
      <img
        src={leftArrow}
        style={style}
      />
      {Object.values(related).map((result, index) => {
        return <ProductCard
        relatedProduct={result}
        key={index}
        />
      })}
      <img
        src={rightArrow}
        style={style}
      />
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