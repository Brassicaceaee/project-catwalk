import React, {useContext} from 'react'
import Stars from "../Stars.jsx";
import { updateFilterContext } from './FilterContext.jsx';
import styles from "./reviews.module.css";
import {useProductContext} from '../../context/ProductContext.jsx';


const RatingBreakdown = () => {
  const updateFilter = updateFilterContext();
  const {meta} = useProductContext();
  const total = meta.total;
  const average = meta.average;
  const ratings = meta.ratings;
  const recommended = meta.recommended.true;

  const onRatingClick = (e) => {
    // This is a proof of concept. I'm not sure if I will probably just end up using innerhtml for simplicity sake but the dataset thing is pretty cool.
    updateFilter(e.target.dataset.value)
  }

  return (
    <div className={`${styles.flex} ${styles.column} ${styles.medPadding}`}>
      <h3 className={`${styles.resetMargin} ${styles.medMarginBottom}`}>RATINGS & REVIEWS</h3>
      <div className={styles.flex}>
        <span className={`${styles.largeFont} ${styles.medMarginRight}`}>{average} </span>
        <Stars rating={average}/>
      </div>
      {bars.map((bar, index) => {
        let percent = (ratings[bar] / total * 100) + '%';
        return (
          <div key={index} className={`${styles.flex} ${styles.center} ${styles.medMarginBottom}`}>
<<<<<<< HEAD
            <span onClick={onRatingClick}  data-value={bar} className={styles.medMarginRight}>{bar} Broc</span>
=======
            <span onClick={onRatingClick}  data-value={bar} className={styles.medMarginRight}>{bar} Brock</span>
>>>>>>> main
            <div className={styles.bar}>
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