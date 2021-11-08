import React, {useState} from 'react';
import styles from './overview.module.css';
import json from './styleSample.json';
import {FaCheck} from 'react-icons/fa';
import {StyleIndexContext} from './overview.jsx'


const StyleSelector = (props) => {

  console.log(props.styles)
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
              <span className={styles.styleItem} key={index}>
                <img
                  className={styles.styleThumbnail}
                  src={option.photos[0].thumbnail_url}
                  onClick={(e)=>{handleClick(e, option); changeStyleIndex(index)}}
                />
                {option === selectedStyle && <FaCheck id={styles.check} color="#00acee"/>}
              </span>
            )}
        </div>
      </>
      )}
    }
    </StyleIndexContext.Consumer>
  );
};

export default StyleSelector;