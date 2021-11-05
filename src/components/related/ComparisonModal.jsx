import React, { useState, useEffect} from 'react';
import styles from './related.module.css';

const ComparisonModal = ({left, right, togglePop}) => {

  // get an array of objects, having all the overviewProduct features as key, and value as value
  let overviewFeatures = left.features.reduce((obj, user) => {
    obj[user.feature] = user.value;
    return obj;
  }, {});
  // console.log("overview:" , overviewFeatures);

  // get an array of objects, having all the relatedProduct features as key, and value as value
  let relatedFeatures = right.info.features.reduce((obj, user) => {
    obj[user.feature] = user.value;
    return obj;
  }, {});
  // console.log('compare:', relatedFeatures);

  let featureHolder = {};
  Object.keys(overviewFeatures).forEach(value =>{
    featureHolder[value] = ''
  })

  Object.keys(relatedFeatures).forEach(value =>{
    featureHolder[value] = ''
  })

// console.log(featureHolder)
  return (
    <div>
      <div className={styles.modal} >
      <div className={styles.actions}>
        <button onClick={togglePop}>Close</button>
      </div>
      <h3>Comparing</h3>
        <div>{Object.keys(featureHolder).map((features, index) => {
          return (
          <div key={index} className={styles.content}>
            <span>{overviewFeatures[features]? overviewFeatures[features] : ' x'}</span>
            <span>{features}</span>
            <span>{relatedFeatures[features]?  relatedFeatures[features]:  'x '}</span>
          </div>);
        })}</div>
      </div>
    </div>
  );
 }


export default ComparisonModal;
