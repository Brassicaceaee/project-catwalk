import React from 'react';
import styles from './questions.module.css';

const SearchBar = (props) => {

  return(
    <div id='search' className={styles.searchBar}>
      <form>
        <input type='text' placeholder='Have a question? Search for answers…'></input>
      </form>
    </div>
  )
};

export default SearchBar;