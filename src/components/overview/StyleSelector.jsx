import React from 'react';
import styles from './overview.module.css';

const StyleSelector = (props) => {



  return (
    <>
      <p className={styles.styleText}>STYLE > <span>Selected Style</span></p>
      <div className={styles.styleSelection}> </div>

    </>
  );
};

export default StyleSelector;