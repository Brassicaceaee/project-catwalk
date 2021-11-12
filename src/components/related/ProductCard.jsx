import React, { useState, useEffect } from 'react';
import './related.css';
import ComparisonModal from './ComparisonModal.jsx';
import {useProductContext} from '../../context/ProductContext.jsx';
import { AiOutlineStar } from "react-icons/ai";
import axios from 'axios'
import Stars from '../Stars.jsx';

const ProductCard = ({relatedProduct, update}) =>{
  const { info } = useProductContext();
  const[isOpen, setIsOpen] = useState(false);
  const [averageRating, setAverageRating] = useState('');
  const imgNotAvailable ='https://www.gemkom.com.tr/wp-content/uploads/2020/02/NO_IMG_600x600-1.png'
  const isSale = relatedProduct.styles[0].sale_price
  const originalPrice = relatedProduct.info.default_price
  const relatedImg = relatedProduct.styles[0].photos[0].thumbnail_url
  const relatedCategory = relatedProduct.info.category
  const relatedName = relatedProduct.info.name
  const relatedId = relatedProduct.info.id

  //get the rating of related product
  useEffect(() => {
    axios.get(`/rating/${relatedId}`)
    .then(results => {
      setAverageRating(results.data[relatedId])
    })
  }, [])

  const togglePop = () => {
    setIsOpen(!isOpen)
  };

  const changeCurrentProduct = () =>{
    // update(relatedProduct.info.id)
    setTimeout(() =>  window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
     }), 600);
  }

  return (
    <div className='related-card'>
      <div className='button'>
        <AiOutlineStar size={30} color={'black'} onClick={togglePop}/>
      </div>
      {isOpen && <ComparisonModal left={info} right={relatedProduct} togglePop={togglePop}/>}
      <img
        className='img'
        src={relatedImg || imgNotAvailable}
        onClick={changeCurrentProduct}
      />
      <div className='product-info'>
        <div className='category'>{relatedCategory}</div>
        <div>{relatedName}</div>
        {isSale
        ? <div>
            ${isSale}
            <strike style={{color: 'red'}}>${originalPrice}</strike>
          </div>
        : <div>${originalPrice}</div>
        }
        <Stars rating={averageRating}/>
      </div>
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