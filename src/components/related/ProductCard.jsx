import React, { useState, useEffect } from 'react';
import styles from './related.module.css';
import ComparisonModal from './ComparisonModal.jsx';
import {useProductContext} from '../../context/ProductContext.jsx';

const ProductCard = ({relatedProduct}) =>{
  const { info, styles } = useProductContext();
  const[isOpen, setIsOpen] = useState(false);

  const togglePop = () => {
    setIsOpen(!isOpen)
  };

  const isSale = relatedProduct.styles[0].sale_price
  const originalPrice = relatedProduct.info.default_price
  const relatedImg = relatedProduct.styles[0].photos[0].thumbnail_url

  return (
    <div>
      <i className="far fa-star" onClick={togglePop}  ></i>
      {isOpen
      ? <ComparisonModal left={info} right={relatedProduct} togglePop={togglePop}/>
      : <></>}
      <img src={relatedImg}/>
      <div>{relatedProduct.info.category}</div>
      <div>{relatedProduct.info.name}</div>
      {isSale
      ? <div>${isSale}</div>
      : <div>${originalPrice}</div>
    }
    </div>
  )
}
export default ProductCard;



// import axios from 'axios';
// import { API_KEY } from '../../../config/config.js'

// const[relatedProduct, setRelatedProduct] = useState({});
// const[relatedImg, setRelatedImg]= useState('');
// const[salePrice, setSalePrice] = useState('');

// const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products'
// const options = {
  //   headers: {'Authorization': API_KEY}
  // };

// useEffect(() =>{
  // // get related product info
  // axios.get(`${API_URL}/${relatedID}`, options)
  // .then(results => {
    //     // console.log(results.data)
    //     setRelatedProduct(results.data)
    // })

    //get related product image
    // axios.get(`${API_URL}/${relatedProduct.info.id}/styles`, options)
    // .then(result => setRelatedImg(result.data.results[0].photos[0].thumbnail_url))

    // // get product sale price
    // axios.get(`${API_URL}/${relatedID}/styles`, options)
    // .then(result => setSalePrice(result.data.results[0].sale_price))
    // }, [])

      // Object.keys(relatedProduct).length > 0 &&
      // Object.keys(overviewProduct).length > 0 &&