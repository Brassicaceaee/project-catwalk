import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './related.css';
import {useProductContext} from '../../context/ProductContext.jsx';
import Stars from '../Stars.jsx';
import { MdClose } from "react-icons/md";

const OutfitCard = ({storedOutfit, getStoredOutfit}) => {
  const { styles, meta } = useProductContext();

  const outfitImg = styles.results[0].photos[0].thumbnail_url
  const isSale = styles.results[0].sale_price
  const originalPrice = styles.results[0].original_price
  const averageRating = meta.average;

  // delete outfit, then get the new outfit list back and reset outfitData
  const handleRemoveOutfit = () =>{
    axios.delete('/outfit',  {
      data:{storedOutfitID: storedOutfit.id},
    })
    .catch(function (err) {
      console.log('error in handleRemoveOutfit', err);
    });

    getStoredOutfit()
  }

  return (
    <div className='related-card'>
      <div className='button'>
      <MdClose
        size={30} color={'black'}
        onClick={handleRemoveOutfit}
      />
      </div>
      <img className='outfit-img' src={outfitImg}/>
      <div className='product-info'>
        <div className='category'>{storedOutfit.category}</div>
        <div>{storedOutfit.name}</div>
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


export default OutfitCard;
