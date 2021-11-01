import React from 'react';
import useFetch from '../../utils/useFetch.jsx'

const ProductCardEntry = () =>{
  const {data: productInfo} = useFetch('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/')
  return(
    <div>
      This is Product Card ↓
      {productInfo.map((result, index) =>
      <div key={index}>
        <div>{result.category}</div>
        <div>{result.name}</div>
        <div>{result.price}</div>
      </div>)}
      This is Product Card ↑
    </div>
  )
}
export default ProductCardEntry;