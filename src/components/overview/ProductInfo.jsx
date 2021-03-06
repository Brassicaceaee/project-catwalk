import React from 'react';
import styles from './overview.module.css'
import StyleSelector from './StyleSelector.jsx'
import AddToCart from './addToCart/AddToCart.jsx'
import Stars from '../Stars.jsx'

const ProductInfo = (props) => {

  let price;
  let originalPrice = props.styles[props.styleIndex].original_price;
  let salePrice = props.styles[props.styleIndex].sale_price;
  let saleStyle = {'text-decoration':'line-through'}

  if(salePrice) {
    price = <span style={saleStyle}> {originalPrice}</span>
  } else {
    price = <span>{originalPrice}</span>
  }


  return(

    <div className={styles.infoComponent}>

      <div className={styles.starReview}>
        <Stars rating={props.product.meta.average}/>
        <a href='#reviewsWidget'>Read all reviews</a>
      </div>

      <div className={styles.category}>
        {props.product.info.category}
      </div>

      <div className={styles.title}>
        {props.product.info.name}
      </div>

      <div className={styles.price}>

        <span>{price}</span>
        {salePrice &&
        <span style={{'color' : 'red',
                      'font-style': 'italic',
                      'font-weight' : 'bolder'}}>
          {salePrice}</span>}

      </div>

      <div className={styles.styles}>
        <StyleSelector styles={props.product.styles.results}/>
      </div>

      <div className={styles.addToCart} >
        <AddToCart skus={props.styles[props.styleIndex].skus}/>
      </div>

    </div>
  )
};

export default ProductInfo;
