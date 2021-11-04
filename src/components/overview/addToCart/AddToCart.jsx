import React from 'react';
import styles from '../overview.module.css';
import json from '../styleSample.json';


const AddToCart = (props) => {
  const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  var options = json.results;
  var currentSkus = options[0].skus; //Object of containing skus;

  var skus = Object.values(currentSkus)
  debugger;

  //TODO
  //for every size ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    //based on teh size chosen, we save the sku's Key ID
      //We render a quantity selector based of with the quantity associated with the sku's keyID
  var sizeSelector = P

  return (
      <>
      <div className={styles.addToCart}>
        <span className={styles.size}>
          <select>

            {Object.values(currentSkus).map( (sku ) =>
             <option option={sku.size}>{sku.size}</option>)}

          </select>
        </span>
        <span className={styles.quantity}> quantity</span>
        <span className={styles.cartButton}>add To Cart</span>
        <span className={styles.cartStar}>star</span>
      </div>
      </>
  );
};

export default AddToCart;