import React from 'react';
import ProductCardList from './ProductCardList.jsx';
import OutfitList from './OutfitList.jsx';
import './related.css';

const Related = () => {
  return (
    <div className='widget'>

      <div className='productCardList'>
        Related Productss
        <ProductCardList />
      </div>
      <div className='outfitList'>
        Your Outfit List
        <OutfitList />
      </div>
    </div>
  )
}

export default Related;


