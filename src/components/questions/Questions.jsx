import React from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import styles from './questions.module.css';

const Questions = () => {

  return (
    <div className={styles.widget}>
      <h4> Questions & Answers </h4>
      <SearchBar />
      <QuestionList />
    </div>
  )
}

export default Questions;