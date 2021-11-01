import React from 'react';
import useFetch from '../../utils/useFetch.jsx'

const ProductCardEntry = () =>{
  const {data: productInfo} = useFetch('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products')
  // const {data: discountPrice} = useFetch('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/' )


  return(
    <div>
      This is Product Card ↓
      {productInfo.map((result, index) =>
      //   const {data: relatedID} = useFetch( `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${result}`
      //   <li key={index}>
      //     {result.id}
      //   </li>

      <div key={index}>
<div>{result.category}</div>
<div>{result.name}</div>
<div>${result.default_price}</div>
</div>

      )}
      This is Product Card ↑
    </div>
  )
}
export default ProductCardEntry;

