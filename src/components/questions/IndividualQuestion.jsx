import React from 'react';
import AnswerList from './AnswerList.jsx';
const answers = require('./questiondata/answerdata.js');


const Question = (props) => {

  return(
      <li>
        <h6>{props.question.question_body}</h6>
        <AnswerList answers={answers.results}/>
      </li>
  )
};

export default Question;