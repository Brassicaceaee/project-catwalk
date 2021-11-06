import React, {useState} from 'react';
import styles from './overview.module.css';
import json from './styleSample.json';
import {FaCheck} from 'react-icons/fa';
import {StyleContext} from './overview.jsx'


const StyleSelector = (props) => {
  // var data = json;
  // var styleOptions = data.results //all results of styles form ID, sample data
  // var styleOptions = StyleContext.Consumer;
  const [selectedStyle, setStyle] = useState('');


  const handleClick = (event, option) => {

    setStyle(option);
    //TODO
    // Change state of Image gallery if this option changes
  }

  //For every style option, display the first photo thumbnail of the option
  return (
    <>
      <StyleContext.Consumer>
        { (value) => {
          // var styleOption = value;
          console.log(value)
          if(selectedStyle === '') {
            setStyle(value[0])
          }
        return (


          <>
        <p className={styles.styleText}>STYLE > <span>{selectedStyle.name}</span></p>

        <div className={styles.styleSelection}>

            {value.map( (option, key) =>
              <span className={styles.styleItem} key={key}>
                <img
                  className={styles.styleThumbnail}
                  src={option.photos[0].thumbnail_url}
                  onClick={(e)=>{handleClick(e, option)}}
                />
                {option === selectedStyle && <FaCheck id={styles.check} color="#00acee"/>}
              </span>
            )}
        </div>
        </>
        )}
      }
      </StyleContext.Consumer>
    </>
  );
};

export default StyleSelector;