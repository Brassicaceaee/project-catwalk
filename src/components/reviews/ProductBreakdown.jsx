import React from 'react'
import styles from "./reviews.module.css";

const ProductBreakdown = () => {
  return (
    <div className={styles.productBreakdown}>Product Breakdown</div>
  );
}

var product = [
  {
    label: 'Size',
    score: 3.4,
  },
  {
    label: 'Width',
    score: 1,
  },
  {
    label: 'Quality',
    score: 4,
  },
]

var subLabel = {
  Size: ['Too small', 'Perfect', 'Too large'],
  Width: ['Too narrow', 'Perfect', 'Too wide'],
  Comfort: ['Uncomfortable', '', 'Perfect'],
  Quality: ['Poor', '', 'Perfect'],
  Length: ['Runs short', 'Perfect', 'Runs long'],
  Fit: ['Runs tight', 'Perfect', 'Runs long']
}

export default ProductBreakdown;