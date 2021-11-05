import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './related.module.css';
import { API_KEY } from '../../../config/config.js'
import ComparisonModal from './ComparisonModal.jsx';
import {useProductContext} from '../../context/ProductContext.jsx';

const ProductCard = ({relatedProduct}) =>{
  const { info, styles } = useProductContext();
    // console.log(relatedProduct)

  // const[relatedProduct, setRelatedProduct] = useState({});
  const[relatedImg, setRelatedImg]= useState('');
  // const[salePrice, setSalePrice] = useState('');
  const[isOpen, setIsOpen] = useState(false);

  const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products'
  const options = {
    headers: {'Authorization': API_KEY}
  };


  const togglePop = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() =>{
    // // get related product info
    // axios.get(`${API_URL}/${relatedID}`, options)
    // .then(results => {
    //     // console.log(results.data)
    //     setRelatedProduct(results.data)
    // })

    //get related product image
    axios.get(`${API_URL}/${relatedProduct.info.id}/styles`, options)
    .then(result => setRelatedImg(result.data.results[0].photos[0].thumbnail_url))

    // // get product sale price
    // axios.get(`${API_URL}/${relatedID}/styles`, options)
    // .then(result => setSalePrice(result.data.results[0].sale_price))
  }, [])

  // console.log(relatedProduct)

  const isSale = relatedProduct.styles[0].sale_price
  // const relatedImg = styles.results[0].photos[0].thumbnail_url
  return (
    // Object.keys(relatedProduct).length > 0 &&
    // Object.keys(overviewProduct).length > 0 &&
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
      : <div>${relatedProduct.info.default_price}</div>
      }
    </div>
  )
}
export default ProductCard;