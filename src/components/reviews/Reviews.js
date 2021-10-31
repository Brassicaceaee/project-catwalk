import React from 'react';
import ProductBreakdown from './ProductBreakdown.js';
import RatingBreakdown from './RatingBreakdown.js';
import ReviewsList from './ReviewsList.js';
import styles from "./reviews.module.css";

const Reviews = () => {
  return (
    <div className={styles.widget}>
      <RatingBreakdown className={styles.ratingBreakdown}/>
      <ReviewsList className={styles.reviewsList}/>
      <ProductBreakdown className={styles.productBreakdown}/>
    </div>
  );
}

export default Reviews;