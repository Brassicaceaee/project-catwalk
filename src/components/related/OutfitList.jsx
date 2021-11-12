import React, { useState, useEffect } from 'react';
import './related.css';
import axios from 'axios';
import {useProductContext} from '../../context/ProductContext.jsx';
import OutfitCard from './OutfitCard.jsx';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";


const OutfitList = () => {
  const { info } = useProductContext();
  const [outfitData, setOutfitData] = useState([]);
  const style = { height: '300px', width: '260px'};
  let  plusSymbol = 'https://www.pngarts.com/files/3/Plus-Symbol-Transparent-Images.png'

  //get stored outfit list
  const getStoredOutfit = () =>{
    axios.get('/outfit')
    .then(results => {
      setOutfitData(results.data)
    })
  }

  useEffect(() =>{
    getStoredOutfit()
  },[])

  // post data to server, then get the new outfit list back and reset outfitData
  const handleAddOutfit = () => {
    axios.post('/outfit', {
      productID: info.id,
      productInfo: info
    })
    .catch(function (err) {
      console.log('error in handleAddOutfit', err);
    });

    getStoredOutfit()
  }


  return (
    <div className='outfit-list'>
      <div className='add'>
        <img
          className='img'
          src={plusSymbol}
          style={style}
          onClick={handleAddOutfit}
        />
         <div className='small-title'>Add to Outfit</div>
      </div>
      {Object.values(outfitData).map((storedOutfit) => {
        return (
          <OutfitCard
            key={storedOutfit.id}
            storedOutfit={storedOutfit}
            getStoredOutfit={getStoredOutfit}
          />
      )})}
    </div>
  )
}

export default OutfitList;








