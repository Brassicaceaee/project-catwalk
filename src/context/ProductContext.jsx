import React, {useContext, useState} from 'react';

const ProductContext = React.createContext();
const ProductUpdateContext = React.createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
}
export const updateProductContext = () => {
  return useContext(ProductUpdateContext);
}


export function ProductProvider({children}) {
  const [average, updateAverage] = useState(5);

  const update = () => {
    updateAverage(prev => prev * 2);
  }

  return (
    <ProductContext.Provider value={average}>
      <ProductUpdateContext.Provider value={update}>
        {children}
      </ProductUpdateContext.Provider>
    </ProductContext.Provider>
  )
}