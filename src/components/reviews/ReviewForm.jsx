import React from 'react';
import modalStyle from '../questions/questions.module.css';
import Stars from '../Stars.jsx';
import styles from './reviews.module.css';


const ReviewForm = ({close}) => {
  return (
    <div className={modalStyle.modal}>
      <div className={modalStyle.content}>
        <form>
          <div>
            <h4>Rating</h4>
            <Stars rating={0}/>
          </div>
          <div>
            <h4>Would you recommend this product?</h4>
            <div>
              <input id='yesRecommend' type='radio' name='recommend' value='Yes'/>
              <label htmlFor='yesRecommend'>Yes</label>
              <input id='noRecommend' type='radio' name='recommend' value='No'/>
              <label htmlFor='noRecommend'>No</label>
            </div>
          </div>
          <div>
            <h4>Characteristics</h4>
            <div className={`${styles.charGrid} ${styles.center}`}>
              {/* These are all temporary elements to show how the grid will look (A future ticket will replace these with by mapping over the characteristics for the current product)*/}
              <div></div>
              <label htmlFor='noRecommend'>1</label>
              <label htmlFor='noRecommend'>2</label>
              <label htmlFor='noRecommend'>3</label>
              <label htmlFor='noRecommend'>4</label>
              <label htmlFor='noRecommend'>5</label>
              <label className={styles.alignLeft}>Char</label>
              <input id='char1' type='radio' name='recommend' value='1'/>
              <input id='char2' type='radio' name='recommend' value='2'/>
              <input id='char3' type='radio' name='recommend' value='3'/>
              <input id='char4' type='radio' name='recommend' value='4'/>
              <input id='char5' type='radio' name='recommend' value='5'/>
            </div>
          </div>
          <div>
            <h4>Summary</h4>
            <input type='text' placeholder='Example: Best purchase ever!'></input>
          </div>
          <div>
            <h4>Review</h4>
            <input type='text' placeholder='What did you like or dislike about the product?'></input>
          </div>
          <div>
            <button>ADD PHOTOS</button>
          </div>
          <div>
            <h4>Nickname</h4>
            <input type='text' placeholder='Example: jackson11!'></input>
          </div>
          <div>
            <h4>Email</h4>
            <input type='text' placeholder='Example: jackson11@email.com'></input>
          </div>
          <div>
            <button>SUBMIT</button>
            <button onClick={close}>CLOSE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// These are the labels for the characteristics radio buttons
var charLabels = {
  Size: ['Too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'Too large'],
  Width: ['Too narrow', 'Slightly', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs short', 'Runs slight short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
}


export default ReviewForm;