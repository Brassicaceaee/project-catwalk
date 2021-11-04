import React, { useState } from 'react';
import styles from "./stars.module.css";

const Stars = ({rating}) => {
  var rounded = Math.round(rating * 4) / 4;

  return (
    <div className={styles.Stars} style={{'--rating': rounded}} aria-label={"Rating of this product is " + rounded + " out of 5."}></div>
  )
}

export default Stars;