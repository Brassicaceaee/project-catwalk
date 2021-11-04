import React from 'react';
import styles from './questions.module.css';

const SearchBar = (props) => {

  return(
    <div className={styles.searchBar}>
      <form>
        <input value='search'></input>
      </form>
    </div>
  )
};

export default SearchBar;