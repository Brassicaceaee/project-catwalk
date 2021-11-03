import React from 'react';
import styles from './overview.module.css';
import json from './styleSample.json'

const StyleSelector = (props) => {
  console.log(json)

  var data = json;
  var styleOptions = data.results //all results of styles form ID


  //For every style option, display the first photo thumbnail of the option
  return (
    <>
      <p className={styles.styleText}>STYLE > <span>Selected Style</span></p>

      <div className={styles.styleSelection}>

      {styleOptions.map( (option) =>
        <span className={styles.styleItem}>
          <img className={styles.styleThumbnail} src={option.photos[0].thumbnail_url}/>
        </span>
      )}
      </div>

    </>
  );
};

export default StyleSelector;