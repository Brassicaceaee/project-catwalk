import React from 'react';
import ProductCardList from './ProductCardList.jsx';
import OutfitList from './OutfitList.jsx';
import styles from './related.module.css';

const Related = () => {
  return (
    <div >
      Related Products
        <ProductCardList />
      Your Outfit List
       <OutfitList />
    </div>
  )
}

export default Related;


