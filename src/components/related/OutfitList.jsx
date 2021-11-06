import React, { useState, useEffect } from 'react';
import styles from './related.module.css';
import axios from 'axios';
import {useProductContext} from '../../context/ProductContext.jsx';
import OutfitCard from './OutfitCard.jsx';


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
      <i onClick={handleAddOutfit} className="fas fa-plus">Add to Outfit</i>
      {Object.values(outfitData).map((storedOutfit) => {
        return <OutfitCard key={storedOutfit.id} storedOutfit={storedOutfit}
        getStoredOutfit={getStoredOutfit}/>
      })}
    </div>
  )
}

export default OutfitList;








