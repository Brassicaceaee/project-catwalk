import React, {useState, useEffect, useRef} from 'react';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';
import styles from './questions.module.css';
import {useProductContext} from '../../context/ProductContext.jsx';
import { filterBySearchTerm } from '../../utils/helpers.js';

const QuestionList = () => {

  // Added actual questions using context
  const {questions} = useProductContext();

  const [searchTerm, setSearchTerm] = useState('');

  // This creates a jsxQuestions state variables to track the questions and store them as jsx question elements
  const [jsxQuestions, updateJSX] = useState([]);

  // This code sets the length of the displayed questions (default is 2)
  const [displayedQuestions, setDisplayed] = useState(jsxQuestions.slice(0, 2));
  
  // Each click extends list of questions by up to 2
  const moreQuestionsClick = () => {
    if (jsxQuestions.length > displayedQuestions.length) {
      let length = displayedQuestions.length;
      setDisplayed(jsxQuestions.slice(0, length + 2));
    }
  }

  // Maps out Question components, and filters and re-renders when search bar is used
  useEffect(() => {
    updateJSX(filterBySearchTerm(questions.results, searchTerm).map((question, i) => {
      return (
        <Question question={question} key={i} questionid={question.question_id}/>
        )
      }))
    }, [questions, searchTerm])
    
  // Updates the Q&A component so it defaults to show 2 questions
  useEffect(() => {
    setDisplayed(jsxQuestions.slice(0, 2));
  }, [jsxQuestions])

  return(
    <div>
      <div className={styles.searchBar}>
      <form>
        <input 
        type='text'
        placeholder='Have a question? Search for answers…'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
      <ul className={styles.questionList}>
        {displayedQuestions}
      </ul>
      <div className={styles.questionListButtons}>
        {(displayedQuestions.length < jsxQuestions.length) &&
        <button className='button' onClick={moreQuestionsClick}>More Answered Questions</button>
      }
      {(displayedQuestions.length === jsxQuestions.length && jsxQuestions.length > 2) && 
      <button 
      className='button' 
      onClick={ () => setDisplayed(jsxQuestions.slice(0, 2))}>
      Collapse Questions
      </button> }
      <AddQuestion/>
      </div>
    </div>
  )
};

export default QuestionList;