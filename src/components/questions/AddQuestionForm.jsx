import React from 'react';

const QuestionForm = () => {

  return (
    <form>
      <label>
        Question:
        <input type='text' name='question'></input>
      </label>
    </form>
  )
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