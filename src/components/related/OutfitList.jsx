import React from 'react';
import styles from './related.module.css';
import OutfitCard from './OutfitCard.jsx'

const OutfitList = () => {
  return (
    <div className={styles.OutfitList}>
      <i class="fas fa-plus">Add to Outfit</i>
      {/* <button> Add to Outfit </button> */}
      <OutfitCard />
    </div>
  )
}

export default OutfitList;