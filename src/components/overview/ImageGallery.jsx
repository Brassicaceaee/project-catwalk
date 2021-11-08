import React, {useState} from 'react';
import styles from './overview.module.css'
import json from './styleSample.json';


const ImageGallery = (props) => {

  var photos = props.styles[props.styleIndex].photos;
  const [mainPhoto, setMainPhoto] = useState(0);

  const handleThumbnailClick = (event, index) => {
    setMainPhoto(index)
  }


  return(
    <div className={styles.galleryContainer}>

      <span className={styles.galleryThumbnails}>

          {photos.map((photo, index) => {
            if (mainPhoto === index) {
              var thumbnailStyle = styles.galleryThumbnailPhotoSelected;
            } else {
              var thumbnailStyle = styles.galleryThumbnailPhoto;
            }

            return (
              <span className={styles.galleryThumbnailPhotoContainer}>


                <img className={thumbnailStyle}
                src={photo.thumbnail_url}
                onClick={(e) => handleThumbnailClick(e, index)}/>
              </span>
              )
            })
          }

      </span>
      <span className={styles.galleryMain}>
          <img className={styles.mainPhoto} src={photos[mainPhoto].url}/>
      </span>
    </div>

  )


};

export default ImageGallery;