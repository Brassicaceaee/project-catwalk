import React from 'react';
import styles from './overview.module.css'
import StyleSelector from './StyleSelector.jsx'
import AddToCart from './addToCart/AddToCart.jsx'

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
        <StyleSelector styles={props.productInfo.styles.results}/>
      </div>

      <div className={styles.addToCart}>
        <AddToCart />
      </div>

    </div>
  )
};

export default ProductInfo;
