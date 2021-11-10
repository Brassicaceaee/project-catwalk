import React from 'react';
import styles from './overview.module.css'


const Features = (props) => {
  console.log(props)
  // debugger;
  return(
    <div>
      {props.productInfo.features.map( (feature) =>
       <li>{feature.feature}:
           {feature.value}
       </li>)}
      {/* <li> {productInfo.features} </li> */}
    </div>

  )


};

export default Features;