import React from 'react';
import ProductCardList from './ProductCardList.jsx';
import OutfitList from './OutfitList.jsx';
import './related.css';

const Related = () => {
  return (
    <div className='widget'>
      <div className='productCardList'>
        <p className='title'>Related Products</p>
        <ProductCardList />
      </div>
      <div className='outfitList'>
      <p className='title'>Your Outfit List</p>
        <OutfitList />
      </div>
    </div>
  )
}

export default Related;


