import React from 'react';
import styles from './overview.module.css'
import {FaChevronRight} from 'react-icons/fa'
import {IoLeafOutline} from 'react-icons/io5'

const Features = (props) => {
  console.log(props)
  // debugger;
  return(
    <div className={styles.featuresContainer}>
      {props.productInfo.features.map( (feature, index) =>

         <li className={styles.features} key={index}>
          <IoLeafOutline color='#47682C'/>
          {feature.feature}{':  '}
          <span style={{'font-style': 'italic',}}>{feature.value}</span>

         </li>
      )}
    </div>
  )
};

export default Features;