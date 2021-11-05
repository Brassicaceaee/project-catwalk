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
      <QuestionForm show={modalShown}/>
    </div>
  )
};

export default AddQuestion;