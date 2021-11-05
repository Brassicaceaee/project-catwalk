import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import styles from "./reviews.module.css";
import { useProductContext } from "../../context/ProductContext.jsx";

const ReviewsList = () => {
  const {reviews} = useProductContext();
  const reviewsList = reviews.results;

  return (
    <div className={styles.reviewsList}>
      <div className={styles.sortOptions}>
        <p className={styles.sortLabel}><span>{reviews.count}</span> reviews, sorted by </p>
        <select className={styles.sortSelect}>
          <option>relevance</option>
          <option>helpful</option>
          <option>newest</option>
        </select>
      </div>
      {reviewsList.map((review, index) => {
        return <ReviewTile key={review.review_id} review={review}/>
      })}
      <div>
        <button>MORE REVIEWS</button>
        <button>ADD A REVIEW +</button>
      </div>
    </div>
  );
}


export default ReviewsList;