import React from 'react';
import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import { FilterProvider } from './FilterContext.jsx'
import styles from './reviews.module.css';

const Reviews = () => {
  return (
    <FilterProvider>
        <div className={`${styles.widget} ${styles.maxSize} reviews`} id={'reviewsWidget'}>
        <RatingBreakdown/>
        <ReviewsList/>
        <ProductBreakdown/>
      </div>
    </FilterProvider>
  );
}

export default Reviews;