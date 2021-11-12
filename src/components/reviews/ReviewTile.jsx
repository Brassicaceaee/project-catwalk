import React, { useState } from 'react';
import axios from 'axios';
import Stars from '../Stars.jsx';
import moment from 'moment';
import styles from "./reviews.module.css";
import {useProductContext, updateProductContext} from '../../context/ProductContext.jsx';

const ReviewTile = ({review}) => {

  const {info} = useProductContext();
  const updateProduct = updateProductContext();
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const helpfulClicked = (e) => {
    setHelpful(true);
    axios.put(`/rev/helpful?review_id=${review.review_id}`)
    .then((result) => {
      updateProduct(info.id);
    })
  }

  const reportedClicked = (e) => {
    setReported(true);
    axios.put(`/rev/report?review_id=${review.review_id}`)
    .then((result) => {
      updateProduct(info.id);
    })
  }

  const reviewDate = moment(review.date).format('MMMM DD, YYYY');

  return (
    <div className={styles.largeMarginBottom}>
      <div className={`${styles.flex} ${styles.spaceBetween}`}>
        <Stars rating={review.rating}/>
        <span className={styles.subFont}>{`${review.reviewer_name}, ${reviewDate}`}</span>
      </div>
      <p><strong>Review summary</strong></p>
      <p>{review.body}</p>
      {/* <p>Show more</p> */}
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
      {review.response &&
        <div className={`${styles.response} ${styles.smallPadding}`}>
          <strong>Response from seller:</strong>
          <p>{review.response}</p>
        </div>
      }
      <p className={styles.subFont}>Was this review helpful?
        <span className={`${!helpful ? styles.active : undefined} ${styles.smallMarginLeft}`} onClick={!helpful ? helpfulClicked : undefined}>Yes </span>
        ({review.helpfulness})
        <span className={`${!reported ? styles.active : undefined} ${styles.smallMarginLeft}`} onClick={!reported ? reportedClicked : undefined}>Report</span>
      </p>
      <hr></hr>
    </div>
  );
}

export default ReviewTile;