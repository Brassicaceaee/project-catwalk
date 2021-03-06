import React from 'react'
import styles from "./reviews.module.css";
import { useProductContext } from '../../context/ProductContext.jsx';

const ProductBreakdown = () => {
  const {meta} = useProductContext();
  const characteristics = meta.characteristics;

  return (
    <div className={`${styles.flex} ${styles.column} ${styles.medPadding}`}>
      {Object.keys(characteristics).map((key, index) => {
        return (
          <div key={characteristics[key].id} className={styles.smallMarginBottom}>
            <p className={styles.smallMarginBottom}>{key}</p>
            <div className={`${styles.bar} ${styles.smallMarginBottom}`}>
              <div className={styles.downArrow} style={{'--score': characteristics[key].value}}></div>
            </div>
            <div className={`${styles.smallFont} ${styles.flex} ${styles.spaceBetween}`}>
              <div>{subLabel[key][0]}</div>
              <div>{subLabel[key][1]}</div>
              <div>{subLabel[key][2]}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
}


var subLabel = {
  Size: ['Too small', 'Perfect', 'Too large'],
  Width: ['Too narrow', 'Perfect', 'Too wide'],
  Comfort: ['Uncomfortable', '', 'Perfect'],
  Quality: ['Poor', '', 'Perfect'],
  Length: ['Runs short', 'Perfect', 'Runs long'],
  Fit: ['Runs tight', 'Perfect', 'Runs long']
}

export default ProductBreakdown;