import React from 'react';
import styles from './overview.module.css'


const Description = ({productInfo}) => {

  return(
    <div className={styles.descriptionContainer}>
      <div className={styles.slogan} >{productInfo.slogan} </div>
      <div className={styles.descriptionText}>{productInfo.description} </div>
    </div>
  )
};

export default Description;