import React, {useState} from 'react';
import styles from './overview.module.css'
import json from './styleSample.json';


const ImageGallery = (props) => {

  var nums = Array.from(Array(7).keys()) //Used for testing flex box children size
  // console.log(nums)

  /*Gallery would need
   -state of style index,
    -style information,
    chosen thumbnail index

    */


   var photos = json.results[0].photos;
  // const [selectedStyle, setStyle] = useState() //Place holder for use of context to change style
  const [mainPhoto, setMainPhoto] = useState(0);

  console.log(photos)

  return(

    <div className={styles.galleryContainer}>

      <span className={styles.galleryThumbnails}>

        {nums.map((num) =>
        <span className={styles.galleryThumbnailImages}> {num} </span>)}

      </span>
      <span className={styles.galleryMain}>
          <img className={styles.mainPhoto} src={photos[mainPhoto].url}/>
      </span>
    </div>

  )


};

export default ImageGallery;