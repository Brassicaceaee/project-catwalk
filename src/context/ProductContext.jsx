import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';

const ProductContext = React.createContext();
const ProductUpdateContext = React.createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
}
export const updateProductContext = () => {
  return useContext(ProductUpdateContext);
}


export function ProductProvider({children}) {
  const [product, updateProduct] = useState(5);

  const update = (product_id) => {
    axios.get(`/products?product_id=${product_id}`)
    .then((productInfo) => {
      updateProduct(productInfo);
    })
  }

  useEffect(() => {
    update(40344);
  }, [])

  return (
    <ProductContext.Provider value={product}>
      <ProductUpdateContext.Provider value={update}>
        {children}
      </ProductUpdateContext.Provider>
    </ProductContext.Provider>
  )
}