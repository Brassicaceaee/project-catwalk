import React, {useState} from 'react';
import styles from './questions.module.css';
import QuestionForm from './AddQuestionForm.jsx';

const AddQuestion = (props) => {

  const [modalShown, toggleModal] = useState(false);
  const modalButtonClick = () => {
    toggleModal(!modalShown);
  }

  return(
    <div>
      <button className='button' onClick={modalButtonClick}>Add Question +</button>
      <div>
        <QuestionForm show={modalShown} modalButtonClick={modalButtonClick}/>
      </div>
    </div>
  )
};

export default AddQuestion;