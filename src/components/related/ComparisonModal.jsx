import React, { useState, useEffect} from 'react';
import './related.css';

const ComparisonModal = ({left, right, togglePop}) => {

  const currentProductName = left.name;
  const relatedProductName = right.info.name;

  // get an array of objects, having all the overviewProduct features as key, and value as value
  let overviewFeatures = left.features.reduce((obj, user) => {
    obj[user.feature] = user.value;
    return obj;
  }, {});

  // get an array of objects, having all the relatedProduct features as key, and value as value
  let relatedFeatures = right.info.features.reduce((obj, user) => {
    obj[user.feature] = user.value;
    return obj;
  }, {});

  let featureHolder = {};
  Object.keys(overviewFeatures).forEach(value =>{
    featureHolder[value] = ''
  })

  Object.keys(relatedFeatures).forEach(value =>{
    featureHolder[value] = ''
  })

  return (
    <div>
      <div className='modal'>
      <div className='actions'>
        <button onClick={togglePop}>Close</button>
      </div>
      <h3>Comparing</h3>
      <span className='left-comparison'>{currentProductName}</span>
      <span className='right-comparison'>{relatedProductName}</span>
      <div>{Object.keys(featureHolder).map((features, index) => {
        return (
        <div key={index} className='content comparison'>
          <span className='left-comparison'>{overviewFeatures[features]? overviewFeatures[features] : 'x'}</span>
          <span className='middle-comparison'>{features}</span>
          <span className='right-comparison'>{relatedFeatures[features]?  relatedFeatures[features] : 'x'}</span>
        </div>
        )})}
      </div>
      </div>
    </div>
  );
 }


export default ComparisonModal;
