import React, {useState, useEffect, useRef} from 'react';
import Question from './IndividualQuestion.jsx';
import AddQuestion from './AddQuestion.jsx';
import styles from './questions.module.css';
import {useProductContext} from '../../context/ProductContext.jsx';


const QuestionList = (props) => {

  // Added actual questions using context
  const {questions} = useProductContext();

  // This creates a jsxQuestions state variables to track the questions and store them as jsx question elements


  const [jsxQuestions, updateJSX] = useState([]);

  // This updates the jxs question elements when new data comes in from context
  useEffect(() => {
    updateJSX(questions.results.map((question, i) => {
      return (
        <Question question={question} key={i} questionid={question.question_id}/>
      )
    }))
  }, [questions])

  // This code sets the length of the displayed questions (default is 2)
  const [displayedQuestions, setDisplayed] = useState(jsxQuestions.slice(0, 2));

  // This should update the Q&A component so it defaults to show 2 questions, however right now including this useEffect breaks the related product click functionality so I am not including it

  // useEffect(() => {
  //   setDisplayed(jsxQuestions.slice(0, 2));
  // }, [jsxQuestions])

  // Each click extends list of questions by up to 2
  let moreQuestionsClick = () => {
    if (jsxQuestions.length > displayedQuestions.length) {
      let length = displayedQuestions.length;
      setDisplayed(jsxQuestions.slice(0, length + 2));
    }
  }

  return(
    <div>
      <ul className={styles.questionList}>
        {displayedQuestions}
      </ul>
      <div className={styles.questionListButtons}>
        {(displayedQuestions.length < jsxQuestions.length) &&
        <button className='button' onClick={moreQuestionsClick}>More Answered Questions</button>
      }
      {(displayedQuestions.length === jsxQuestions.length && jsxQuestions.length > 2) && <button className='button' onClick={ () => setDisplayed(jsxQuestions.slice(0, 2))}>Collapse Questions</button> }
      <AddQuestion/>
      </div>
    </div>
  )
};

export default QuestionList;