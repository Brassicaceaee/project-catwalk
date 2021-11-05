import React, {useState, useEffect} from 'react';
import styles from './questions.module.css';
import QuestionForm from './AddQuestionForm.jsx';

const AddQuestion = (props) => {

  const [modalShown, toggleModal] = useState(false);
  const modalButtonClick = () => {
    toggleModal(!modalShown);
  }

  useEffect(() => {
    if (modalShown) {

    }
  });

  return(
    <div className={styles.addQuestion}>
      <button onClick={modalButtonClick}>Add Question +</button>
      <div>
        <QuestionForm show={modalShown} modalButtonClick={modalButtonClick}/>
        {/* <button onClick={modalButtonClick}>Close</button> */}
      </div>
    </div>
  )
};

export default AddQuestion;