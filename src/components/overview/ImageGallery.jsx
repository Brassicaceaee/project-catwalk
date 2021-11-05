import React from 'react';
import styles from './overview.module.css'


const ImageGallery = (props) => {

  return(

    <div className={styles.galleryContainer}>

      <span className={styles.galleryThumbnails}>Thumbnails</span>
      <span className={styles.galleryMain}>MainImage</span>
    </div>

  )


};

export default ImageGallery;