import React from 'react';
import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import styles from './reviews.module.css';

const Reviews = () => {
  return (
    <div className={`${styles.widget} ${styles.maxSize} reviews`} id={'reviewsWidget'}>
      <RatingBreakdown/>
      <ReviewsList/>
      <ProductBreakdown/>
    </div>
  );
}

export default Reviews;