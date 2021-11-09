import React, {useState} from 'react';
import styles from './overview.module.css'
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx'
import Description from './Description.jsx';
import Features from './Features.jsx'
import json from './styleSample.json'
import {useProductContext} from '../../context/ProductContext.jsx'
//Will pass in productcontext.style to to style context as default value


export const StyleIndexContext = React.createContext({
  styleIndex:0,
  changeStyleIndex: () => {},
});


const Overview = (props) => {

    const [styleIndex, setStyleIndex] = useState(0);
    var product = useProductContext();

    console.log(styleIndex)
    return(
      <StyleIndexContext.Provider value ={{changeStyleIndex : setStyleIndex}}>
        <div className={styles.widget}>

        <div className={styles.imageGallery}>
        <ImageGallery styles={product.styles.results} styleIndex={styleIndex}/>
        </div>


        <div className={styles.productInfo}>
        <ProductInfo product={product} styles={product.styles.results} styleIndex={styleIndex}/>
        </div>

        <div className={styles.description}>
          <Description product={product}/>
        </div>

        <div className={styles.features}>
          <Features product={product}/>
        </div>
      </div>
    </StyleIndexContext.Provider>
  )
}


export default Overview;