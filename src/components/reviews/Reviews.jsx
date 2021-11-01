import React from 'react';
import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import styles from "./reviews.module.css";

const Reviews = () => {
  return (
    <div className={styles.widget + ' reviews'}>
      <RatingBreakdown className={styles.ratingBreakdown}/>
      <ReviewsList className={styles.reviewsList}/>
      <ProductBreakdown className={styles.productBreakdown}/>
    </div>
  );
}

export default Reviews;