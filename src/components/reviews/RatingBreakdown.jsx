import React, {useContext} from 'react'
import Stars from "../Stars.jsx";
import styles from "./reviews.module.css";
import {useProductContext} from '../../context/ProductContext.jsx';
const RatingBreakdown = () => {
  const {meta} = useProductContext();
  const total = meta.total;
  const average = meta.average;
  const ratings = meta.ratings;
  const recommended = meta.recommended.true;

  return (
    <div className={styles.ratingBreakdown}>
      <h3>RATINGS & REVIEWS</h3>
      <div className={styles.ratingBar}>
        <span className={styles.averageRating}>{average} </span>
        <Stars rating={average}/>
      </div>
      {bars.map((bar, index) => {
        let percent = (ratings[bar] / total * 100) + '%';
        return (
          <div key={index} className={styles.ratingBar}>
            <span>{bar} Star</span>
            <div className={styles.percentBar}>
              <div style={{ width: percent }}></div>
            </div>
          </div>
        );
      })}
      <p>{Math.round(recommended / total * 100)}% of reviews recommend this product</p>
    </div>
  );
}

// This is a temporary helper variable that I will replace when I think of a better way to map over the ratings
var bars = [
  5,
  4,
  3,
  2,
  1
]

export default RatingBreakdown;