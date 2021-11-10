import React from 'react';
import ProductCardList from './ProductCardList.jsx';
import OutfitList from './OutfitList.jsx';
import './related.css';

const Related = () => {
  return (
    <div className='widget' id='related'>
        <p className='small-title'>Related Products</p>
        <ProductCardList />
        <p className='small-title'>Your Outfit List</p>
        <OutfitList />
    </div>
  )
}

export default Related;


