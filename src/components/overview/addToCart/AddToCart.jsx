import React, {useState} from 'react';
import styles from '../overview.module.css';
import json from '../styleSample.json';
import AddToCartButton from './AddToCartButton.jsx';

const AddToCart = (props) => {

  var currentSkus = props.skus;
  var skus = Object.values(currentSkus)

  const [selectedSize, setSize] = useState('')
  const [selectedSKU, setSKU] = useState('')
  const [selectedQuantity, setQuantity] = useState(1);


  const handleSizeSelect = (event) => {
    var skuID = event.target.value
    var skuData = currentSkus[skuID]
    setSKU(skuID)
    setSize(skuData.size)
  }

  let sizeSelector;

  if (Object.entries(currentSkus).length > 0){
   sizeSelector = (
             <select name={selectedSize} onChange={handleSizeSelect}>

                {selectedSize === '' && <option>Select Style</option>}
                {Object.entries(currentSkus).map( (sku) =>
                <option value={sku[0]} key={sku[0]}> {sku[1].size} </option>)}

              </select>
    )
  } else {
   sizeSelector = <p>OUT OF STOCK</p>
  }




  const handleQuantitySelect = (event) => {
    setQuantity(event.target.value)
  }

  let quantitySelector;

  if (selectedSize === '') {
    quantitySelector = <select><option> - </option></select>

  } else {
    //Defaults to first SKU if new Style was selected
    if(currentSkus[selectedSKU]) {
      var num = currentSkus[selectedSKU].quantity

    } else {
      var firstSku = Object.keys(currentSkus)[0]
      var num = currentSkus[firstSku].quantity;
    }

    //Keeps quantity to only display 15 max
    if (num > 15) {
      num = 15
    }
    //Generates array [0, 1, 2, 3, 4, ...] for quantity options,
    //array is used for mapping out React option elements for the selector
    var quantityNumbers = Array.from(Array(num).keys())

    quantitySelector = (
              <select value={selectedQuantity} onChange={handleQuantitySelect}>

                {quantityNumbers.slice(1, quantityNumbers.length).map( (number) =>
                  <option value={number} key={number}>{number}</option>)}

              </select>
    )
  }


  /////Add to cart button



  return (
      <>
      <div className={styles.addToCart}>
        <span className={styles.size}>
           {sizeSelector}
        </span>
        <span className={styles.quantity}>
          {quantitySelector}
        </span>
        <span className={styles.cartButton}>

          {sku.length > 0 &&
            <AddToCartButton size={selectedSize} skuID={selectedSKU} quantity={selectedQuantity} />
          }
        </span>

        <span className={styles.cartStar}>star</span>
      </div>
      </>
  );
};

export default AddToCart;