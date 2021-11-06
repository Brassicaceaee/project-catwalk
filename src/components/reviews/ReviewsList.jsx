import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import ReviewForm from './ReviewForm.jsx';
import styles from './reviews.module.css';
import modalStyle from '../questions/questions.module.css';
import { useProductContext } from '../../context/ProductContext.jsx';

const ReviewsList = () => {
  const {reviews} = useProductContext();
  const reviewsList = reviews.results;

  return (
    <div className={`${styles.reviewsComponent} ${styles.flex} ${styles.column} ${styles.medPadding}`}>
      <div className={`${styles.flex} ${styles.medMarginBottom}`}>
        <p className={`${styles.resetMargin} ${styles.smallMarginRight}`}><span>{reviews.count}</span> reviews, sorted by </p>
        <select>
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
        <button>MORE REVIEWS</button>
        <button>ADD A REVIEW +</button>
      </div>
      <ReviewForm/>
    </div>
  );
}


export default ReviewsList;