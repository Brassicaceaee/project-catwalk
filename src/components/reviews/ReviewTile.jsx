import React from 'react'
import Stars from '../Stars.jsx';
import moment from 'moment';
import styles from "./reviews.module.css";

const ReviewTile = ({review}) => {
  return (
    <div className={styles.reviewTile}>
      <div className={styles.flex}>
        <Stars rating={review.rating}/>
        <span>{moment(review.date).format('MMMM DD, YYYY')}</span>
      </div>
      <p><strong>Review summary</strong></p>
      <p>{review.body}</p>
      <p>Show more</p>
      {
        review.photos.map((photo) => {
          return (
            <img key={photo.id} src={photo.url}></img>
          )
        })
      }
      <p>{review.reviewer_name}</p>
      {review.response &&
        <div className={styles.response}>
          <strong>Response from seller:</strong>
          <p>{review.response}</p>
        </div>
      }
      <p>Was this review? <span>Yes</span> (#) <span>No</span> (#)</p>
      <hr></hr>
    </div>
  );
}

export default ReviewTile;