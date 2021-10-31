import React from 'react'

const RatingBreakdown = () => {
  return (
    <>
      <h3>RATINGS & REVIEWS</h3>
      <div>
        <span>#.#</span>
        <span>*****</span>
      </div>
      <div>
        <span>5 Star</span>
        <div className='bar'></div>
      </div>
      <div>
        <span>4 Star</span>
        <div className='bar'></div>
      </div>
      <div>
        <span>3 Star</span>
        <div className='bar'></div>
      </div>
      <div>
        <span>2 Star</span>
        <div className='bar'></div>
      </div>
      <div>
        <span>1 Star</span>
        <div className='bar'></div>
      </div>
      <p>##% of reviews recommend this product</p>
    </>
  );
}

export default RatingBreakdown;