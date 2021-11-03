import React from 'react';
import Answer from './Answer.jsx';
import styles from './questions.module.css';

const AnswerList = (props) => {

  let answers = props.answers.map((answer, i) => {
    return <Answer answer={answer} key={i} />
  });

  return(
    <ul className={styles.answerList}>
      {answers}
    </ul>
  )
};

export default AnswerList;