import React from 'react'
import styles from "./reviews.module.css";

const ProductBreakdown = () => {
  return (
    <div className={styles.productBreakdown}>
      {scores.map((score, index) => {
        return (
          <div key={index} className={styles.characteristic}>
            <p>{score.label}</p>
            <div className={styles.scoreBar}>
              <div className={styles.arrowDown} style={{'--score': score.score}}></div>
            </div>
            <div className={styles.subLabels}>
              <div>{subLabel[score.label][0]}</div>
              <div>{subLabel[score.label][1]}</div>
              <div>{subLabel[score.label][2]}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

var scores = [
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