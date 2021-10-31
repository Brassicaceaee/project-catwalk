import React from 'react'
import styles from "./reviews.module.css";

const RatingBreakdown = () => {
  return (
    <div className={styles.ratingBreakdown}>
      <h3>RATINGS & REVIEWS</h3>
      <div>
        <span>#.#</span>
        <span>*****</span>
      </div>
      <div>5 Star *****</div>
      <div>4 Star ****-</div>
      <div>3 Star ***--</div>
      <div>2 Star **---</div>
      <div>1 Star *----</div>
      <p>##% of reviews recommend this product</p>
    </div>
  );
}

export default RatingBreakdown;