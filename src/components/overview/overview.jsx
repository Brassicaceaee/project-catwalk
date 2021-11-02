import React from 'react';
import styles from './overview.module.css'
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx'
import Description from './Description.jsx';
import Features from './Features.jsx'

const Overview = (props) => {

    return(
      <div className={styles.widget}>

      <div className={styles.imageGallery}>
      <ImageGallery />
      </div>

      <div className={styles.productInfo}>
      <ProductInfo />
      </div>

      <div className={styles.description}>
        <Description />
      </div>

      <div className={styles.features}>
        <Features />
      </div>
    </div>
  )
}


export default Overview;