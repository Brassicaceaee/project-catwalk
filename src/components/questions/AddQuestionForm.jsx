import React from 'react';
import styles from './questions.module.css';

const QuestionForm = (props) => {
  if (props.show) {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>
          <form className={styles.questionForm}>
            <label> Your Question *</label>
            <input type='text' name='question' maxlength='1000'></input>
            <label> Your Nickname *</label>
            <input type='text' placeholder='Example: jackson11!' maxlength='60'></input>
            <span className={styles.inputSubtext}> For privacy reasons, do not use your full name or email address </span>

            <label> Your Email *</label>
             <input type='text' placeholder='Example: jack@email.com' maxlength='60'></input>
            <span className={styles.inputSubtext}> “For authentication reasons, you will not be emailed”</span>
            <input type='submit' name='Submit Question'></input>
            <div className={styles.actions}>
              <button onClick={props.modalButtonClick}> Close </button>
            </div>
          </form>
        </div>
    </div>
    )
  } else {
    return null;
  }
}

export default QuestionForm;