import React from 'react';
import Question from './IndividualQuestion.jsx';

const QuestionList = (props) => {

  let items = props.data.results.map((question, i) => {
    return (
      <Question question={question} key={i}/>
    )
  })

  return(
    <ul>
      {items}
    </ul>
  )
};

export default QuestionList;