import React, { useState, useEffect } from 'react';
import styles from './related.module.css';
import OutfitCard from './OutfitCard.jsx'

const OutfitList = () => {

  return (
    <div className={styles.OutfitList}>
      <i className="fas fa-plus">Add to Outfit</i>
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



// // delete from outfit List
// app.delete('/outfit/:username', (req, res) => {
//   const username = req.params.username;
//   const outfitId = req.body.id;
//   if (yourOutfit[username] === undefined) {
//     res.sendStatus(202);
//     return;
//   }
//   const index = yourOutfit[username].indexOf(outfitId);
//   if (index === -1) {
//     res.sendStatus(202);
//     return;
//   }
//   yourOutfit[username].splice(index, 1);
//   res.sendStatus(202);
// });