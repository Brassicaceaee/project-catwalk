import React, {useState, useEffect, useRef} from 'react';
import Question from './IndividualQuestion.jsx';
import styles from './questions.module.css';

const QuestionList = (props) => {

  let allQuestions = props.data.results;
  let firstTwoQuestions = props.data.results.slice(0, 2);

  let items = allQuestions.map((question, i) => {
    return (
      <Question question={question} key={i}/>
    )
  })

  const [displayedQuestions, setDisplayed] = useState(items.slice(0, 2));

  let moreQuestionsClick = () => {
    if (allQuestions.length) {
      let nextQuestionChunk = allQuestions.slice(0, 2);
      setDisplayed(displayedQuestions.concat(nextQuestionChunk));
    }
  }

  const screenHeight = window.innerHeight;
  const [height, setHeight] = useState(0);
  const ref = useRef(null);


  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  return(
    <div>
      <ul className={styles.questionList} ref={ref} style={{maxHeight: screenHeight - 100}}>
        {displayedQuestions}
      </ul>
      <button onClick={moreQuestionsClick}>More Answered Questions</button>
    </div>
  )
};

export default QuestionList;