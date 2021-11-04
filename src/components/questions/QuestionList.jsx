import React from 'react';
import Question from './IndividualQuestion.jsx';
import styles from './questions.module.css';

const QuestionList = (props) => {

  let firstTwoQuestions = props.data.results.slice(0, 2);

  let items = firstTwoQuestions.map((question, i) => {
    return (
      <Question question={question} key={i}/>
    )
  })

  // let items = props.data.results.map((question, i) => {
  //   return (
  //     <Question question={question} key={i}/>
  //   )
  // })


  return(
    <ul className={styles.questionList}>
      {items}
    </ul>
  )
};

export default QuestionList;