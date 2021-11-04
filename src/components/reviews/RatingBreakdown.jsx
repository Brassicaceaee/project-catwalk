import React, {useContext} from 'react'
import Stars from "../Stars.jsx";
import styles from "./reviews.module.css";
import {useProductContext} from '../../context/ProductContext.jsx';
const RatingBreakdown = () => {
  const {meta} = useProductContext();
  
  return (
    <div className={styles.ratingBreakdown}>
      <h3>RATINGS & REVIEWS</h3>
      <div className={styles.ratingBar}>
        <span className={styles.averageRating}>{meta ? meta.average : 0} </span>
        <Stars rating={meta ? meta.average : 0}/>
      </div>
      {bars.map((bar, index) => {
        let percent = index + '0' + '%';
        return (
          <div key={index} className={styles.ratingBar}>
            <span>{bar}</span>
            <div className={styles.percentBar}>
              <div style={{ width: percent }}></div>
            </div>
          </div>
        );
      })}
      <p>##% of reviews recommend this product</p>
    </div>
  );
}

var bars = [
  '5 Star',
  '4 Star',
  '3 Star',
  '2 Star',
  '1 Star'
]

export default RatingBreakdown;