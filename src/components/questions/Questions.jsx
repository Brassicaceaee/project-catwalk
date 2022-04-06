import React from 'react';
import QuestionList from './QuestionList.jsx';
import styles from './questions.module.css';

const Questions = () => {

  return (
    <div className={styles.widget}>
      <h4 className={styles.widgetHeader} id='search'> Questions & Answers </h4>
      <QuestionList />
    </div>
  )
}

export default Questions;