import React from 'react'
import modalStyle from '../questions/questions.module.css';

const ReviewForm = ({close}) => {
  return (
    <div className={modalStyle.modal}>
      <div className={modalStyle.content}>
        <form>
          <div>Rating</div>
          <div>Recommend</div>
          <div>Characeristics</div>
          <div>Summary</div>
          <div>Body</div>
          <div>Photos</div>
          <div>Nickname</div>
          <div>Email</div>
          <div>Submit</div>
          <button onClick={close}>CLOSE</button>
        </form>
      </div>
    </div>
  );
}


export default ReviewForm;