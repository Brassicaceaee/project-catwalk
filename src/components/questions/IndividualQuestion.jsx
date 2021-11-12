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
            <div className={styles.smallMarginRight}>Q:</div>
            <div>{props.question.question_body}</div>
          </div>
          <div className={styles.questionRowRight}>
            <div> {/* This div is just so that the Helpful and Add Answer line up*/}
              <span className={styles.subFont}>Helpful?</span>
              <span className={styles.clickableWord}>Yes</span>
              <span className={styles.subFont}>({props.question.question_helpfulness})</span>
            </div>
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
