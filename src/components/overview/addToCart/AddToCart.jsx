import React, {useState} from 'react';
import styles from '../overview.module.css';
import json from '../styleSample.json';


const AddToCart = (props) => {

  var options = json.results;
  var currentSkus = options[0].skus; //Object of containing skus;

  var skus = Object.values(currentSkus)

  const [selectedSize, setSize] = useState('')
  const [selectedSKU, setSKU] = useState('')
  const [selectedQuantity, setQuantity] = useState('');

  //TODO
  //Based on the selected size, get SKU, creat quantity selector
  //If no sizes, selector only has "OUT of Stock"
  //If size not selected, render "-" for quantity selector

  const handleSizeSelect = (event) => {
    var skuID = event.target.value
    var skuData = currentSkus[skuID]

    setSKU(skuID)
    setSize(skuData.size)

  }

  let styleSelector;

  if (Object.entries(currentSkus).length > 0){
    styleSelector =
             ( <select name={selectedSize} onChange={handleSizeSelect}>

                {selectedSize === '' && <option>Select Style</option>}

                {Object.entries(currentSkus).map( (sku) =>
                <option value={sku[0]} key={sku[0]}> {sku[1].size} </option>)}

              </select>);
  } else {
    styleSelector = <p>OUT OF STOCK</p>
  }



  const handleQuantitySelect = (event) => {
    console.log(event.target.value)
    setQuantity(event.target.value)
  }

  let quantitySelector;

  if (selectedSKU === '') {
    quantitySelector = <select><option> - </option></select>
  } else {
    var num = currentSkus[selectedSKU].quantity
    //Generates array [0, 1, 2, 3, 4, ...] for quantity options,
    //array is used for mapping out React option elements for the selector
    var quantityNumbers = Array.from(Array(num).keys())

    quantitySelector = (
              <select value={selectedQuantity} onChange={handleQuantitySelect}>
                {quantityNumbers.slice(1, quantityNumbers.length).map( (number) =>
                  <option value={number}>{number}</option>
                )}
              </select>
    )
  }


  return (
      <>
      <div className={styles.addToCart}>
        <span className={styles.size}>
          {styleSelector}
        </span>
        <span className={styles.quantity}>
          {quantitySelector}
        </span>
        <span className={styles.cartButton}>add To Cart</span>
        <span className={styles.cartStar}>star</span>
      </div>
      </>
  );
};

export default AddToCart;