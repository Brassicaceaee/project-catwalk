import React from 'react';
import axios from 'axios'

const AddToCartButton =  ({size, skuID, quantity}) => {


  const handleAddButtonClick = (event) => {
    axios.post(`/cart/${skuID}`, {quantity: quantity})
    .then( (response) =>
      console.log('Adding items to cart success:', response)
    )
    .catch( (error) =>
      console.log('Adding to cart failed: ',  error)
    )
  }

  return(
    <button onClick={handleAddButtonClick}>AddToCart</button>
  )

};


export default AddToCartButton;