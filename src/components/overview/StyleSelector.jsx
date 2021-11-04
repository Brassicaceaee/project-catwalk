import React, {useState} from 'react';
import styles from './overview.module.css';
import json from './styleSample.json';


const StyleSelector = (props) => {
  var data = json;
  var styleOptions = data.results //all results of styles form ID, sample data
  const [selectedStyle, setStyle] = useState(styleOptions[0]);


  const handleClick = (event, option) => {

    setStyle(option);
    //TODO
    // Change state of Image gallery if this option changes
  }

  //For every style option, display the first photo thumbnail of the option
  return (
    <>

      <p className={styles.styleText}>STYLE > <span>{selectedStyle.name}</span></p>

      <div className={styles.styleSelection}>

      {styleOptions.map( (option) =>
        <span className={styles.styleItem} >
          <img className={styles.styleThumbnail} src={option.photos[0].thumbnail_url} onClick={(e)=>{handleClick(e, option)}}/>
        </span>
      )}
      </div>

    </>
  );
};

export default StyleSelector;