import React, { useState } from 'react';
import styles from "./stars.module.css";

const Stars = ({rating}) => {
  const [rounded, setRating] = useState(rating);

  return (
    <div className={styles.Stars} style={{'--rating': rounded}} aria-label={"Rating of this product is " + rounded + " out of 5."}></div>
  )
}

export default Stars;