import React from 'react';
import AnswerList from './AnswerList.jsx';
const answers = require('./questiondata/answerdata.js');
import styles from './questions.module.css';
import AddAnswer from './AddAnswer.jsx';

const Question = (props) => {


  return(
      <li className={styles.question}>
        <div className={styles.questionRow}>
          <div className={styles.questionRowLeft}>
            <h6>Q: {props.question.question_body}</h6>
          </div>
          <div className={styles.questionRowRight}>
            <button> helpful</button>
            <AddAnswer question={props.question}/>
          </div>
        </div>
        <div className={styles.answerRow}>
          <AnswerList answers={answers.results} questionid={props.questionid}/>
        </div>
      </li>
  )
};

export default Question;