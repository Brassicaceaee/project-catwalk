import React from 'react';
import axios from 'axios'

const AddToCartButton =  ({size, skuID, quantity}) => {



  const handleAddButtonClick = (event) => {


    //post items to server

    axios.post(`/cart/${skuID}`, {quantity: quantity})
    .then( (response) =>
      console.log('Adding items to cart success:', response)
    )
    .catch( (error) =>
      console.log('Adding to cart failed: ',  error)
    )

    //if no size selecteed
    if (size === '') {

    }
      //call "please select size" message popup function
      //may have to passdown function from parent component


  }


  return(
    <button onClick={handleAddButtonClick}>AddToCart</button>


  )



};


export default AddToCartButton;