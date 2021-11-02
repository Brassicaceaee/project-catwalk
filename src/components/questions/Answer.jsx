import React from 'react';
import styles from './questions.module.css';

const Answer = (props) => {

  return(
    <li className={styles.answer}>
      <div>
        {props.answer.body}
      </div>
      <div>by [username], [date here]
      <button>Helpful</button>
      <button>Report</button>
      </div>
    </li>
  )
};

export default Answer;