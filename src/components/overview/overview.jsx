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

//Refactoring to pass Style info as props to components
// Then the StyleContext will change the Index for the ImageGallery and AddToCart to determine
  //The selected style

//If new productInfo is provide,
//the style index will be reset to first index.
//Maybe create state for overview to retain the state of style index, and cureent product info
  //Could compare to previous ID to see if there needs to be an index reset

const Overview = (props) => {

    const [styleIndex, setStyleIndex] = useState();
    var product = useProductContext();

    // const changeStyleIndex = (event, index) => {
    //   setStyleIndex(index)
    // }
    console.log(styleIndex)
    return(
      <StyleIndexContext.Provider value ={{changeStyleIndex : setStyleIndex}}>
        <div className={styles.widget}>

        <div className={styles.imageGallery}>
        <ImageGallery />
        </div>


        <div className={styles.productInfo}>
        <ProductInfo productInfo={product}/>
        </div>

        <div className={styles.description}>
          <Description />
        </div>

        <div className={styles.features}>
          <Features />
        </div>
      </div>
    </StyleIndexContext.Provider>
  )
}


export default Overview;