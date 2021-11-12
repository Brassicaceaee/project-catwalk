import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';

import { useFilterContext } from './FilterContext.jsx';
import ReviewForm from './ReviewForm.jsx';

import styles from './reviews.module.css';
import modalStyle from '../questions/questions.module.css';
import { useProductContext } from '../../context/ProductContext.jsx';

const ReviewsList = () => {
  const {reviews} = useProductContext();
  const [modalIsActive, setModalState] = useState(false);


  const filters = useFilterContext();

  const [sortBy, setSortBy] = useState('relevance');
  const reviewsList = reviews.results.slice();

  reviewsList.sort((a, b) => {
    // The daysSince helper function is at the bottom of the file
    let aDaysAgo = daysSince(a.date);
    let bDaysAgo = daysSince(b.date);

    if (sortBy === 'relevance') {
      // The relevance weight for each goal is the difference between helpfulness and how many days ago the review occurred. The larger the difference the more relevant it is.
      let aWeight = a.helpfulness - aDaysAgo;
      let bWeight = b.helpfulness - bDaysAgo;
      return bWeight - aWeight;
    } else if (sortBy === 'helpful') {
      return b.helpfulness - a.helpfulness;
    } else if (sortBy === 'newest') {
      return aDaysAgo - bDaysAgo;
    }
  });


  const startReview = () => {
    setModalState(true);
  }

  const cancelReview = () => {
    setModalState(false);
  }

  const onSortChange = (e) => {
    setSortBy(e.target.value);
  }

  return (
    <div className={`${styles.reviewsComponent} ${styles.flex} ${styles.column} ${styles.medPadding}`}>
      <div className={`${styles.flex} ${styles.medMarginBottom}`}>
        <p className={`${styles.resetMargin} ${styles.smallMarginRight}`}><span>{reviews.count}</span> reviews, sorted by </p>
        <select onChange={onSortChange}>
          <option>relevance</option>
          <option>helpful</option>
          <option>newest</option>
        </select>
      </div>
      <div className={`${styles.reviewsList} ${styles.flex} ${styles.column}`}>
        {reviewsList.map((review, index) => {
          return <ReviewTile key={review.review_id} review={review}/>
        })}
      </div>
      <div>
        <div className>MORE REVIEWS</div>
        <div onClick={startReview} className={styles.button}>ADD A REVIEW +</div>
      </div>
      {modalIsActive && <ReviewForm close={cancelReview}/>}
    </div>
  );
}

// A helper function for getting the days since a date
// This is broken out for clarity
const daysSince = (date) => {
  let today = new Date();
  let compareDate = new Date(date) // So we can pass in date strings if needed and they will be converted to date objects
  // The difference will be in milliseonds so we need to convert to days and round down
  let difference = Math.floor((today - compareDate) / 1000 / 60 / 60 / 24);
  return difference;
}


export default ReviewsList;