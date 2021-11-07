import React, { useState, useEffect } from 'react';
import styles from './related.module.css';
import axios from 'axios';
import {useProductContext} from '../../context/ProductContext.jsx';
import OutfitCard from './OutfitCard.jsx';
import plusSymbol from '../../../asset/img/plus-symbol.png';


const OutfitList = () => {

  const { info } = useProductContext();
  const [outfitData, setOutfitData] = useState([]);

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
    <div className={styles.OutfitList}>
      Add to Outfit
      <img
        src={plusSymbol}
        style={{ height: '200px', width: '200px'}}
        onClick={handleAddOutfit}
      />
      {Object.values(outfitData).map((storedOutfit) => {
        return <OutfitCard
          key={storedOutfit.id}
          storedOutfit={storedOutfit}
          getStoredOutfit={getStoredOutfit}
        />
      })}
    </div>
  )
}

export default OutfitList;








