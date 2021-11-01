import React from 'react';
import useFetch from './useFetch.jsx'

const ProductCardEntry = () =>{
  const {data} = useFetch('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/')
  return(
    <div>
      This is Product Card
      {data}
    </div>
  )
}

export default ProductCardEntry;