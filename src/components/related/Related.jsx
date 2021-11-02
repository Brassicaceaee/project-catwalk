import React from 'react';
import ProductCardList from './ProductCardList.jsx'

const Related = () => {
  return (
    <div className='related'>
      Related Products
      <ProductCardList />
    </div>
  )
}


export default Related;
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?product_id = 40364/related

