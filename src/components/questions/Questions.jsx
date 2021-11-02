import React from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
const data = require('./questiondata/questiondata.js');
import styles from './questions.module.css';

const Questions = () => {
  return (
    <div className={styles.widget}>
      <SearchBar/>
      <QuestionList data={data}/>
      <AddQuestion/>
    </div>
  )
}

export default Questions;