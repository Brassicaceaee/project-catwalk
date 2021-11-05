import React from 'react';
import styles from './overview.module.css'


const ImageGallery = (props) => {

  var nums = Array.from(Array(7).keys())
  console.log(nums)
  return(

    <div className={styles.galleryContainer}>

      <span className={styles.galleryThumbnails}>

        {nums.map((num) =>
        <span className={styles.galleryThumbnailImages}> {num} </span>)}

      </span>
      <span className={styles.galleryMain}>MainImage</span>
    </div>

  )


};

export default ImageGallery;