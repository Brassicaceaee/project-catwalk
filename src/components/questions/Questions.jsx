import React from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
const data = require('./questiondata/questiondata.js');

const Questions = () => {
  return (
    <div className='questions'>
      <SearchBar/>
      <QuestionList data={data}/>
      <AddQuestion/>
    </div>
  )
}

export default Questions;