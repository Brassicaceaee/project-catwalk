import React from 'react';
import styles from './questions.module.css';

const QuestionForm = (props) => {
  if (props.show) {
    return (
      <div>
        <form className={styles.questionForm}>
          <label> Your Question: </label>
          <input type='text' name='question' maxlength='1000'></input>

          <label> Your Nickname: </label>
            <input type='text' placeholder='Example: jackson11!' maxlength='60'></input>
          <span className={styles.inputSubtext}> For privacy reasons, do not use your full name or email address </span>

          <label> Your Email: </label>
            <input type='text' placeholder='Why did you like the product or not?' maxlength='60'></input>
            <span className={styles.inputSubtext}> “For authentication reasons, you will not be emailed”</span>
          <input type='submit' name='Submit Question'></input>
        </form>
      </div>
    )
  } else {
    return null;
  }
}

export default QuestionForm
/*
Your Question (mandatory)
This text input should be a large text window allowing up to 1000 characters.

What is your nickname (mandatory)
A text input allowing up to 60 characters for the user’s display name.
Placeholder text should read: “Example: jackson11!”.
Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.

Your email (mandatory)
A text input allowing up to 60 characters.
Placeholder text should read: “Why did you like the product or not?”.
Below this field, the text “For authentication reasons, you will not be emailed” will appear.
*/