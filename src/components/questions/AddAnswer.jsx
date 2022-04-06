import React, {useState} from 'react';
import styles from './questions.module.css';
import AnswerForm from './AnswerForm.jsx';

const AddAnswer = (props) => {

  const [modalShown, toggleModal] = useState(false);
  const modalButtonClick = () => {
    toggleModal(!modalShown);
  }

  return(
    <div>
      <span className={styles.clickableWord} onClick={modalButtonClick}>Add Answer</span>
      <div>
        <AnswerForm show={modalShown} modalButtonClick={modalButtonClick} question={props.question}/>
      </div>
    </div>
  )
};

export default AddAnswer;
