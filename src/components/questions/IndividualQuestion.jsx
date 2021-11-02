import React from 'react';
import AnswerList from './AnswerList.jsx';
const answers = require('./questiondata/answerdata.js');
import styles from './questions.module.css';


const Question = (props) => {

  return(
      <li className={styles.question}>
        <div>
          <h6>{props.question.question_body}</h6>
          <button> helpful</button>
          <button>add answer</button>
        </div>
        <AnswerList answers={answers.results}/>
      </li>
  )
};

export default Question;