import React, {useState} from 'react';
import styles from './overview.module.css'
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx'
import Description from './Description.jsx';
import Features from './Features.jsx'
import json from './styleSample.json'
import {useProductContext} from '../../context/ProductContext.jsx'
import { useContext } from 'react/cjs/react.production.min';
import { useOverviewContext } from '../../context/OverviewContext.jsx';
//Will pass in productcontext.style to to style context as default value


export const StyleIndexContext = React.createContext({
  styleIndex:0,
  changeStyleIndex: () => {},
});


const Overview = (props) => {

  const [styleIndex, setStyleIndex] = useState(0);
  var product = useProductContext();
  let overviewData = useOverviewContext();
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
          <Description productInfo={product.info}/>
        </div>

        <div className={styles.features}>
          <Features productInfo={product.info}/>
        </div>
      </div>
    </StyleIndexContext.Provider>
  )
}


export default Overview;