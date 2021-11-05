import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../../config/config.js';
import styles from './related.module.css';
import OutfitCard from './OutfitCard.jsx'

const OutfitList = () => {
  const [overviewProduct, setOverviewProduct] = useState({});
  const [outfitList, setOutfitList] = useState([]);

  const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products'
  const options = {
    headers: {'Authorization': API_KEY}
  };

  useEffect(() => {
    // get the overview product info
    axios.get(`${API_URL}/40365`,options)
    .then(response => setOverviewProduct(response.data))

  }, []);
  return (
    <div className={styles.OutfitList}>
      <i class="fas fa-plus">Add to Outfit</i>
      {/* <button> Add to Outfit </button> */}
      <OutfitCard />
    </div>
  )
}

export default OutfitList;



// var yourOutfit = {
//   'example': [40353, 40352, 40433, 40347, 40351, 40348, 40345]
// };

// // Post product to Outfit List
// app.post('/outfit/:username', (req, res) => {
//   const username = req.params.username;
//   const outfitId = req.body.id;
//   if (yourOutfit[username] === undefined) {
//     yourOutfit[username] = [];
//   }
//   if (!yourOutfit[username].includes(outfitId)) {
//     yourOutfit[username].push(outfitId);
//   }
//   res.sendStatus(201);
// });

// // get Outfit List
// app.get('/outfit/:username', (req, res) => {
//   const username = req.params.username;
//   if (yourOutfit[username] === undefined) {
//     yourOutfit[username] = [];
//   }
//   res.send(yourOutfit[username]);
// });