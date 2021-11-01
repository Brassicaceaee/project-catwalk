import React from 'react'
import styles from "./reviews.module.css";

const RatingBreakdown = () => {
  return (
    <div className={styles.ratingBreakdown}>
      <h3>RATINGS & REVIEWS</h3>
      <div>
        <span className={styles.averageRating}>#.# </span>
        <span className={styles.stars}>* * * * *</span>
      </div>
      {bars.map((bar, index) => {
        let percent = index + '0' + '%';
        return (
          <div key={index} className={styles.ratingBar}>
            <span>{bar}</span>
            <div className={styles.percentBar}>
              <div style={{ width: percent }}></div>
            </div>
          </div>
        );
      })}
      <p>##% of reviews recommend this product</p>
    </div>
  );
}

var bars = [
  '5 Star',
  '4 Star',
  '3 Star',
  '2 Star',
  '1 Star'
]

export default RatingBreakdown;