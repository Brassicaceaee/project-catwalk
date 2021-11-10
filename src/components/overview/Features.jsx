import React from 'react';
import styles from './overview.module.css'
import {FaChevronRight} from 'react-icons/fa'

const Features = (props) => {
  console.log(props)
  // debugger;
  return(
    <div className={styles.featuresContainer}>
      {props.productInfo.features.map( (feature, index) =>
         <li className={styles.features} key={index}>
           <FaChevronRight className={styles.chevron} />
           {feature.feature}: {feature.value}

         </li>
      )}
    </div>
  )
};

export default Features;