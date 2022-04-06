import React, {useState} from 'react';
import styles from './questions.module.css';
import {useProductContext} from '../../context/ProductContext.jsx';
import axios from 'axios';

const AnswerForm = (props) => {

  // Store variables from context
  const {info} = useProductContext();
  const productName = info.name;

  const {questions} = useProductContext();
  let questionBody = props.question.question_body;

  // This section keeps track of the uploaded file images in an array. I use this state to prevent more than 5 files from being uploaded.
  const [uploadArray, setUploadArray] = useState([]);

  const handleUpload = (e) => {
    setUploadArray(uploadArray => [...uploadArray, e.target.files[0]]);
    uploadFile(e);
  }


  // These next functions allow me to track the latest file uploaded and store it in the 'file' variable. I use this to turn the file into an image at the bottom of the form where you see an image tag.
  const [file, setFile] = useState()

  // this variable will hold the array of image urls in state (used in post req)
  const [imageURLS, addImageURL] = useState([]);

  const uploadFile = (e) => {
    setFile(e.target.files[0])
    addImageURL(imageURLS => [...imageURLS, e.target.files[0].name])
  }
  // Create state for input fields -- will use this for validation later
  const [answer, updateAnswer] = useState('');
  const handleAnswerChange = (e) => {
    updateAnswer(e.target.value);
  }
  const [nickname, updateNickname] = useState('');
  const handleNicknameChange = (e) => {
    updateNickname(e.target.value);
  }
  const [email, updateEmail] = useState('');
  const handleEmailChange = (e) => {
    updateEmail(e.target.value);
  }

  // Data for post request

  let data = {
    body: answer,
    name: nickname,
    email: email,
    photos: imageURLS,
    question_id: props.question.question_id
  }

  const submitAnswerForm = () => {
    event.preventDefault();

    if (answer && nickname && email){

      axios.post(`/qa/questions/${props.question.question_id}/answers`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('error during post attempt: ', error);
      });
      // this function closes the modal window
      props.modalButtonClick();
    }else{
      alert('One or more mandatory fields are empty');
    }
  }

  if (props.show) {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>
          <h3> Submit Your Answer </h3>
          <span>{`${productName}: ${questionBody}`} </span>
          <form className={styles.questionForm} onSubmit={submitAnswerForm}>
            <label> Your Answer *</label>
            <input type='text' name='question' maxlength='1000' onChange={handleAnswerChange}></input>
            <label> What is your nickname *</label>
            <input type='text' placeholder='Example: jack543!' maxlength='60' onChange={handleNicknameChange}></input>
            <span className={styles.inputSubtext}> For privacy reasons, do not use your full name or email address </span>

            <label> Your email *</label>
             <input type='text' placeholder='Example: jack@email.com' maxlength='60' onChange={handleEmailChange}></input>
            <span className={styles.inputSubtext}> “For authentication reasons, you will not be emailed”</span>
            {uploadArray.length < 5 && <label> Upload your photos </label>}
            {uploadArray.length < 5 && <input type='file' id='file' name='file' accept="image/*" onChange={handleUpload}></input>}
            {file && <img src={URL.createObjectURL(file)} width='100'/>}
            <div className={styles.actions}>
              <button onClick={props.modalButtonClick}> Close </button>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
    </div>
    )
  } else {
    return null;
  }
}

export default AnswerForm;