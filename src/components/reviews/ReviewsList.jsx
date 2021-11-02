import React from 'react';
import Stars from '../Stars.jsx';
import moment from 'moment';
import styles from "./reviews.module.css";

const ReviewsList = () => {
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
      {reviews.results.map((review, index) => {
        return (
          <div key={index} className={styles.reviewTile}>
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
        )
      })}
      <div>
        <button>MORE REVIEWS</button>
        <button>ADD A REVIEW +</button>
      </div>
    </div>
  );
}

var reviews = {
  "product": "2",
  "page": 0,
  "count": 5,
  "results": [
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": false,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    {
      "review_id": 3,
      "rating": 4,
      "summary": "I am liking these glasses",
      "recommend": false,
      "response": "Glad you're enjoying the product!",
      "body": "They are very dark. But that's good because I'm in very sunny spots",
      "date": "2019-06-23T00:00:00.000Z",
      "reviewer_name": "bigbrotherbenjamin",
      "helpfulness": 5,
      "photos": [],
    },
    // ...
  ]
}

export default ReviewsList;