import React, {useContext} from 'react'
import Stars from "../Stars.jsx";
import styles from "./reviews.module.css";
import {useProductContext} from '../../context/ProductContext.jsx';
const RatingBreakdown = () => {
  const {meta} = useProductContext();
  const average = meta.average;

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

var reviewsMeta = {
  "product_id": "40344",
  "ratings": {
      "1": "7",
      "2": "12",
      "3": "20",
      "4": "28",
      "5": "106"
  },
  "recommended": {
      "false": "41",
      "true": "132"
  },
  "characteristics": {
      "Fit": {
          "id": 135219,
          "value": "2.5476190476190476"
      },
      "Length": {
          "id": 135220,
          "value": "2.5952380952380952"
      },
      "Comfort": {
          "id": 135221,
          "value": "2.8536585365853659"
      },
      "Quality": {
          "id": 135222,
          "value": "3.1111111111111111"
      }
  }
}

var bars = [
  5,
  4,
  3,
  2,
  1
]

export default RatingBreakdown;