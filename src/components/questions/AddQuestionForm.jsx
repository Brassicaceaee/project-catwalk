import React, {useState} from 'react';
import styles from './questions.module.css';
import {useProductContext} from '../../context/ProductContext.jsx';
import axios from 'axios';
import { API_KEY } from '../../../config/config.js';





const QuestionForm = (props) => {

    // Store variables from context
    const {info} = useProductContext();
    const productName = info.name;
    const {meta} =useProductContext();
    const product_id = meta.product_id;

  // Create state for input fields -- will use this for validation later
  const [question, updateQuestion] = useState('');
  const handleQuestionChange = (e) => {
    updateQuestion(e.target.value);
  }
  const [nickname, updateNickname] = useState('');
  const handleNicknameChange = (e) => {
    updateNickname(e.target.value);
  }
  const [email, updateEmail] = useState('');
  const handleEmailChange = (e) => {
    updateEmail(e.target.value);
  }

  // let options = {
  //   headers: {'Authorization': API_KEY}
  // };

  // axios.post('https://httpbin.org/post', { hello: 'world' }, {
  //   headers: {
  //     'Test-Header': 'test-value'
  //   }
  // });


  const submitQuestion = () => {
    event.preventDefault();
    if (question && nickname && email) {
      axios.post('/qa/questions', {
        body: question,
        name: nickname,
        email: email,
        product_id: product_id
      },
      {headers: {'Authorization': API_KEY}
    })

      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('error during post attempt: ', error);
      });
    } else {
      alert('One or more mandatory fields are empty');
    }
  }

  if (props.show) {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>
          <h3> Ask Your Question </h3>
          <span>{`About the ${productName}`} </span>
          <form className={styles.questionForm} onSubmit={submitQuestion}>
            <label> Your Question *</label>
            <input type='text' name='question' maxlength='1000' onChange={handleQuestionChange}></input>
            <label> Your Nickname *</label>
            <input type='text' placeholder='Example: jackson11!' maxlength='60' onChange={handleNicknameChange}></input>
            <span className={styles.inputSubtext}> For privacy reasons, do not use your full name or email address </span>

            <label> Your Email *</label>
             <input type='text' placeholder='Example: jack@email.com' maxlength='60' onChange= {handleEmailChange}></input>
            <span className={styles.inputSubtext}> “For authentication reasons, you will not be emailed”</span>
            <input type='submit' name='Submit Question'></input>
            <div className={styles.actions}>
              <button onClick={props.modalButtonClick}> Close </button>
            </div>
          </form>
        </div>
    </div>
    )
  } else {
    return null;
  }
}

export default QuestionForm;


// get method

// if (question && nickname && email) {
//   axios.get('/qa/questions',
//   {headers: {'Authorization': API_KEY}
// })

//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log('error during post attempt: ', error);
//   });
// } else {
//   alert('One or more mandatory fields are empty');
// }
// }
