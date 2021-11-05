import React, {useState, useEffect, useRef} from 'react';
import Question from './IndividualQuestion.jsx';
import AddQuestion from './AddQuestion.jsx';
import styles from './questions.module.css';

const QuestionList = (props) => {


  let allQuestions = props.data.results;
  let firstTwoQuestions = props.data.results.slice(0, 2);

  let items = allQuestions.map((question, i) => {
    return (
      <Question question={question} key={i}/>
    )
  })
  // This code sets the length of the displayed questions (default is 2)
  const [displayedQuestions, setDisplayed] = useState(items.slice(0, 2));

  // Each click extends list of questions by up to 2
  let moreQuestionsClick = () => {
    if (items.length > displayedQuestions.length) {
      let length = displayedQuestions.length;
      setDisplayed(items.slice(0, length + 2));
    }
  }
  // This stores the height of the client screen
  const screenHeight = window.innerHeight;

  // this is the hook for tracking the height of the questions list element
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  // This updates the height according to the ref in the <ul> element
  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  return(
    <div>
      <ul className={styles.questionList} ref={ref} style={{maxHeight: screenHeight - 100}}>
        {displayedQuestions}
      </ul>
      <div className={styles.questionListButtons}>
        {(displayedQuestions.length < items.length) &&
        <button onClick={moreQuestionsClick}>More Answered Questions</button>
      }
      <AddQuestion/>
      </div>
    </div>
  )
};

export default QuestionList;