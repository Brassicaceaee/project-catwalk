import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import styles from './questions.module.css';
import {useProductContext} from '../../context/ProductContext.jsx';

const AnswerList = (props) => {

  // Added actual questions using context
  const {answers} = useProductContext();
  let answerData = answers[props.questionid];

  let answerElements = answerData.map((answer, i) => {
    return <Answer answer={answer} key={i} />
  });
  let firstTwoAnswers = answerElements.slice(0, 2);

  const [collapsed, toggleDisplayState] = useState(true);


  const [displayed, setDisplayed] = useState(answerElements.slice(0, 2));
  // useEffect(() => {
  //   displayedAnswers = answers.slice(0, 2);
  // })

  const [expandCollapseText, changeButtonText] = useState('See More Answers');

  const changeAnswerDisplay = () => {
    if (collapsed) {
      setDisplayed(answerElements);
      changeButtonText('Collapse Answers');
      toggleDisplayState(!collapsed);
    } else {
      setDisplayed(firstTwoAnswers);
      changeButtonText('See More Answers');
      toggleDisplayState(!collapsed);
    }
  }


  return(
    <div>
      <ul className={styles.answerList}>
        {displayed}
      </ul>
      <span onClick={changeAnswerDisplay}><b>{expandCollapseText}</b></span>
    </div>
  )
};

export default AnswerList;