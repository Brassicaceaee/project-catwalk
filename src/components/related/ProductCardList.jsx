import React, { useState, useEffect, useRef } from 'react';
import './related.css';
import ProductCard from './ProductCard.jsx';
import { useProductContext, updateProductContext } from '../../context/ProductContext.jsx';
// import leftArrow from '../../../asset/img/left-arrow.png';
import rightArrow from '../../../asset/img/right-arrow.png';


const ProductCardList = () =>{
  const { related } = useProductContext();
  const update = updateProductContext();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const style = { height: '80px', width: '40px'};
  const ref = useRef();


  const handleLoad = () => {
    let element = ref.current;
    if (element.clientWidth) {
      element.addEventListener('scroll', () => {
        setShowLeftArrow(element.scrollLeft > 0);
        setShowRightArrow(element.scrollLeft < element.scrollWidth - element.clientWidth);
      });
    }
  }

  const handleSlide = (width) => {
    ref.current.scrollLeft += width;
  }

  return (
    <div className='related-list'>
      <button
        className='left-arrow'
        className={showLeftArrow? 'visible':'non-visible'}
        onClick={() => handleSlide(-400)}
      ></button>
      {/* <img
        className='arrow'
        className={showLeftArrow? 'visible':'non-visible'}
        src={leftArrow}
        style={style}
        onClick={() => handleSlide(-400)}
      /> */}
      <div className='carousel' ref={ref} onLoad={handleLoad}>
        {Object.values(related).map((result, index) => {
          return(
          <ProductCard
            key={index}
            relatedProduct={result}
            update={update}
          />
        )})}
      </div>
      <button
        className='right-arrow'
        className={showRightArrow? 'visible':'non-visible'}
        onClick={() => handleSlide(400)}
      >
      </button>
      {/* <img
        className='arrow'
        className={showRightArrow? 'active':'non-active'}
        onClick={() => handleSlide(400)}
      /> */}
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

//   useEffect(() => {
//       // get the related products' id
//       axios.get(`${API_URL}/40365/related`,options)
//       .then(response => setRelatedID(response.data))

//       // get the overview product info
//       axios.get(`${API_URL}/40365`,options)
//   .then(response => setOverviewProduct(response.data))
// }, []);