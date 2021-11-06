import React from 'react';
import styles from './overview.module.css'
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx'
import Description from './Description.jsx';
import Features from './Features.jsx'
import json from './styleSample.json'
import {useProductContext} from '../../context/ProductContext.jsx'
//Will pass in productcontext.style to to style context as default value

export const StyleContext = React.createContext();


const Overview = (props) => {
    var product = useProductContext();
    debugger;
    return(
      <StyleContext.Provider value ={product.styles.results}>
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
    </StyleContext.Provider>
  )
}


export default Overview;