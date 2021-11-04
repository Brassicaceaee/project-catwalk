import React from 'react';
import styles from '../overview.module.css';
import json from '../styleSample.json';


const AddToCart = (props) => {




  return (
      <>
      <div className={styles.addToCart}>
        <span className={styles.size}>size</span>
        <span className={styles.quantity}> quantity</span>
        <span className={styles.cartButton}>add To Cart</span>
        <span className={styles.cartStar}>star</span>
      </div>
      </>
  );
};

export default AddToCart;