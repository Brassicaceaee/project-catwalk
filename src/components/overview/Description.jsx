import React from 'react';
import styles from './overview.module.css'


const Description = ({productInfo}) => {
  console.log(productInfo)

  return(
    <>
    <div >{productInfo.slogan} </div>
    <p >{productInfo.description} </p>
    </>

  )


};

export default Description;