import React from 'react';
import styles from './overview.module.css'


const ProductInfo = (props) => {

  return(
    <div className={styles.infoComponent}>
      <div className={styles.starReview}>starReview</div>
      <div className={styles.category}>category</div>
      <div className={styles.title}>title</div>
      <div className={styles.price}>price</div>
      <div className={styles.styles}>styles</div>
      <div className={styles.addToCart}>addToCart</div>
    </div>
  )


};

export default ProductInfo;