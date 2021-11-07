import React, { useState, useEffect, useRef } from 'react';
import './related.css';
import ProductCard from './ProductCard.jsx';
import {useProductContext} from '../../context/ProductContext.jsx';
import leftArrow from '../../../asset/img/left-arrow.png';
import rightArrow from '../../../asset/img/right-arrow.png';

const ProductCardList = () =>{
  const { related } = useProductContext();
  const style = { height: '130px', width: '50px'};

  // const ref = useRef()
  // console.log(ref.current)


  // const handleSlide = (width) => {
  //   // alert('click!')
  //   ref.current.scrollLeft += width;
  // }

  return (
    <div className='related-list'>
        <img
          className='arrow'
          src={leftArrow}
          style={style}
        />
      {Object.values(related).map((result, index) => {
        return(
         <ProductCard
          key={index}
          relatedProduct={result}
         />
      )})}
      <img
        className='arrow'
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