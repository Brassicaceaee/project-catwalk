import React from 'react';
import AnswerList from './AnswerList.jsx';
const answers = require('./questiondata/answerdata.js');
import styles from './questions.module.css';


const Question = (props) => {

  return(
      <li className={styles.question}>
        <div className={styles.questionRow}>
          <div className={styles.questionRowLeft}>
            <h6>{props.question.question_body}</h6>
          </div>
          <div className={styles.questionRowRight}>
            <button> helpful</button>
            <button>add answer</button>
          </div>
        </div>
        <div className={styles.answerRow}>
          <AnswerList answers={answers.results}/>
        </div>
      </li>
  )
};

export default Question;