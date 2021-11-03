import React from 'react';
import styles from './overview.module.css'
import StyleSelector from './StyleSelector.jsx'

const ProductInfo = (props) => {

  return(
    <div className={styles.infoComponent}>

      <div className={styles.starReview}>
        <p>starReview</p>
      </div>

      <div className={styles.category}>
        <p>Category</p>
      </div>

      <div className={styles.title}>
        <p>Expanded Product Name</p>
      </div>

      <div className={styles.price}>
        <p>Price</p>
      </div>

      <div className={styles.styles}>
        <StyleSelector />
      </div>

      <div className={styles.addToCart}>addToCart</div>

    </div>
  )
};

export default ProductInfo;
