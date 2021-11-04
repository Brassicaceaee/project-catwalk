import React, {useState, useEffect, useRef} from 'react';
import Question from './IndividualQuestion.jsx';
import styles from './questions.module.css';

const QuestionList = (props) => {

  let firstTwoQuestions = props.data.results.slice(0, 2);

  let items = firstTwoQuestions.map((question, i) => {
    return (
      <Question question={question} key={i}/>
    )
  })

  const screenHeight = window.innerHeight;
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  return(
    <ul className={styles.questionList} ref={ref} style={{maxHeight: screenHeight - 100}}>
      {items}
    </ul>
  )
};

export default QuestionList;