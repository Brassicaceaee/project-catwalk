import React from 'react';
import styles from './overview.module.css'
import StyleSelector from './StyleSelector.jsx'
import AddToCart from './addToCart/AddToCart.jsx'

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
        <p>starReview</p>
      </div>

      <div className={styles.category}>
        <p>{props.product.info.category}</p>
      </div>

      <div className={styles.title}>
        <p>{props.product.info.name}</p>
      </div>

      <div className={styles.price}>

        <span>{price}</span>
        {salePrice &&  <span style={{'color' : 'red'}}>{salePrice}</span>}

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
