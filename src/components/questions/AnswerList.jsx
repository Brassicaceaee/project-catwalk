import React, {useState} from 'react';
import Answer from './Answer.jsx';
import styles from './questions.module.css';

const AnswerList = (props) => {

  let answers = props.answers.map((answer, i) => {
    return <Answer answer={answer} key={i} />
  });
  let firstTwoAnswers = answers.slice(0, 2);

  return(
    <ul className={styles.answerList}>
      {firstTwoAnswers}
    </ul>
  )
};

export default AnswerList;