import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './related.module.css';
import {useProductContext} from '../../context/ProductContext.jsx';

const OutfitCard = ({storedOutfit, getStoredOutfit}) => {
  const { styles } = useProductContext();
  console.log(styles)
  const outfitImg = styles.results[0].photos[0].thumbnail_url
  const isSale = styles.results[0].sale_price
  const originalPrice = styles.results[0].original_price

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
    <div >
      <i onClick={handleRemoveOutfit} className="fas fa-times"></i>
      <img src={outfitImg}/>
      <div>{storedOutfit.category}</div>
      <div>{storedOutfit.name}</div>
      {isSale
      ? <div>${isSale}</div>
      : <div>${originalPrice}</div>
    }
    </div>
  )
}


export default OutfitCard;