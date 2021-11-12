import React, {useState} from 'react';
import styles from './overview.module.css';
import json from './styleSample.json';
import {FaCheck} from 'react-icons/fa';
import {StyleIndexContext} from './overview.jsx'


const StyleSelector = (props) => {

  const [selectedStyle, setStyle] = useState(props.styles[0]);

  const handleClick = (event, option) => {
    setStyle(option);
  }


  return (
    <StyleIndexContext.Consumer>
      {
      ({changeStyleIndex}) => {
        if(selectedStyle === '') {
          changeStyleIndex(0)
        }
      return (

      <>
        <p className={styles.styleText}>STYLE > <span>{selectedStyle.name}</span></p>
        <div className={styles.styleSelection}>

            {props.styles.map( (option, index) =>
              <div className={styles.styleItem} key={index}>
                <img
                  className={`${styles.styleThumbnail} ${option === selectedStyle ? styles.outline : undefined}`}
                  src={option.photos[0].thumbnail_url}
                  onClick={(e)=>{handleClick(e, option); changeStyleIndex(index)}}
                />
                {option === selectedStyle && <FaCheck id={styles.check} color='white' size={20}/>}
              </div>
            )}
        </div>
      </>
      )}
    }
    </StyleIndexContext.Consumer>
  );
};

export default StyleSelector;