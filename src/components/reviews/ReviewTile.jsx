import React from 'react'
import Stars from '../Stars.jsx';
import moment from 'moment';
import styles from "./reviews.module.css";

const ReviewTile = ({review}) => {
  return (
    <div className={styles.largeMarginBottom}>
      <div className={styles.flex}>
        <Stars rating={review.rating}/>
        <span>{moment(review.date).format('MMMM DD, YYYY')}</span>
      </div>
      <p><strong>Review summary</strong></p>
      <p>{review.body}</p>
      <p>Show more</p>
      <div className={styles.flex}>
        {
          review.photos.map((photo) => {
            return (
              <div key={photo.id} className={`${styles.thumbNailContainer} ${styles.flex} ${styles.center}`}>
                <img src={photo.url} className={`${styles.thumbnail} ${styles.smallMargin}`}></img>
              </div>
            )
          })
        }
      </div>
      <p>{review.reviewer_name}</p>
      {review.response &&
        <div className={`${styles.response} ${styles.smallPadding}`}>
          <strong>Response from seller:</strong>
          <p>{review.response}</p>
        </div>
      }
      <p>Was this review? <span>Yes</span> ({review.helpfulness}) </p>
      <hr></hr>
    </div>
  );
}

export default ReviewTile;