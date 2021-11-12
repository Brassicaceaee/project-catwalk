import React, { useState, useEffect} from 'react';
import './related.css';

const ComparisonModal = ({left, right, togglePop}) => {

  const currentProductName = left.name;
  const relatedProductName = right.info.name;

  const comparisonContent = () => {

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
      Object.keys(featureHolder).map((features, index) => {
        return (
        <tr key={index} className='content comparison'>
          <td className='left-comparison'>{overviewFeatures[features]? overviewFeatures[features] : ''}</td>
          <td className='middle-comparison'>{features}</td>
          <td className='right-comparison'>{relatedFeatures[features]?  relatedFeatures[features] : ''}</td>
        </tr>
        )
      })
    )
  }

  return (
    <div className='modal'>
      <div className='actions'>
        <button onClick={togglePop}>Close</button>
      </div>
      <table>
        <caption className='caption'>Comparing</caption>
        <thead>
          <tr>
            <th>{currentProductName}</th>
            <th> </th>
            <th>{relatedProductName}</th>
          </tr>
        </thead>
        <tbody>
          {comparisonContent()}
        </tbody>
      </table>
    </div>
  );
 }


export default ComparisonModal;


