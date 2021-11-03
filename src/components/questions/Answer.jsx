import React from 'react';
import styles from './questions.module.css';
import moment from 'moment';


const Answer = (props) => {

  let date = props.answer.date.split('T')[0].split('-');
  let username = props.answer.answerer_name;
  let returnUsername = (username) => {
    if (username === 'Seller') {
      return <b>Seller</b>;
    } else {
      return username;
    }
  }

  return(
    <li className={styles.answer}>
      <div>
        {props.answer.body}
      </div>
      <div className={styles.answerInfo}>
        <span> by {returnUsername(username)}, {moment(date).format('MMMM DD, YYYY')} | </span>
          <div>
            <span className={styles.helpfulAnswer}>Helpful</span>
            <span
            className={styles.helpfulAnswer}
            className={styles.clickableWord}
            >Yes
            </span>
            <span className={styles.helpfulAnswer}>({props.answer.helpfulness}) | </span>
          </div>
          <span className={styles.report} className={styles.clickableWord}>Report</span>
      </div>
    </li>
  )
};

export default Answer;