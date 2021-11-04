import React, {useState} from 'react';
import styles from '../overview.module.css';
import json from '../styleSample.json';


const AddToCart = (props) => {
  // const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  var options = json.results;
  var currentSkus = options[0].skus; //Object of containing skus;

  var skus = Object.values(currentSkus)

  const [selectedSize, setSize] = useState(null)
  const [selectedSKU, setSKU] = useState(null)

  //TODO
  //Based on the selected size, get SKU, creat quantity selector
  //If no sizes, selector only has "OUT of Stock"
  //If size not selected, render "-" for quantity selector

  const handleSizeSelect = (event) => {
    var skuID = event.target.value[0]
    var skuData = event.target.value[1]

    setSKU(skuID)
    setSize(skuData.size)
  }



  return (
      <>
      <div className={styles.addToCart}>
        <span className={styles.size}>

          <select value={selectedSize} onChange={handleSizeSelect}>

            {selectedSize === null && <option>Select Style</option>}

            {Object.entries(currentSkus).map( (sku ) =>
             <option value={sku}>{sku[1].size}</option>)}

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