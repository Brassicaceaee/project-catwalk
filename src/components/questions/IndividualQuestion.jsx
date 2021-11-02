import React from 'react';
import AnswerList from './AnswerList.jsx';
const answers = require('./questiondata/answerdata.js');


const Question = (props) => {

  return(
      <li>
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