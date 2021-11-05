import React, {useState} from 'react';
import styles from './questions.module.css';

const AddQuestion = (props) => {

  const [modalShown, toggleModal] = useState(false);
  const modalButtonClick = () => {
    useState(!modalShown);
  }

  return(
    <div className={styles.addQuestion}>
      Sample text
    </div>
  )
};

export default AddQuestion;