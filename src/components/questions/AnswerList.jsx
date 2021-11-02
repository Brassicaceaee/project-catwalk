import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = (props) => {

  let answers = props.answers.map((answer, i) => {
    return <Answer answer={answer.body} key={i} />
  });

  return(
    <ul>
      {answers}
    </ul>
  )
};

export default AnswerList;