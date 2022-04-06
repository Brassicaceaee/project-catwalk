const express = require('express');
const router = express.Router();
const { getRelatedProductAvgRating, markReviewHelpful, reportReview } = require('../controllers/reviews');

//get average rating from related product
router.get('/rating/:id', getRelatedProductAvgRating )  

// Mark a review as helpful
router.put('/rev/helpful', markReviewHelpful )

// Report a review
router.put('/rev/report', reportReview)

module.exports = router;