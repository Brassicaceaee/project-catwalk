import React, {useState, useEffect, useRef} from 'react';
import styles from './questions.module.css';
import {useProductContext} from '../../context/ProductContext.jsx';

const AnswerForm = (props) => {

  // Store variables from context
  const {info} = useProductContext();
  const productName = info.name;

  const {questions} = useProductContext();
  let questionBody = props.question.question_body;

  // This section keeps track of the uploaded file images in an array. I use this state to prevent more than 5 files from being uploaded.
  const [uploadArray, setUploadArray] = useState([]);
  // let imageInput = document.getElementById('image-uploads');

  // useEffect(() => {
  // }, [uploadArray])

  const handleUpload = (e) => {
    console.log(e.target.files[0])
    setUploadArray(uploadArray => [...uploadArray, e.target.files[0]]);
    uploadFile(e);
    // updateArray(uploadArray => [...uploadArray, e.target.files[0]])
  }
  // These next functions allow me to track the latest file uploaded and store it in the 'file' variable. I use this to turn the file into an image at the bottom of the form where you see an image tag.
  const [file, setFile] = useState()

  const uploadFile = (e) => {
    console.log(file)
    setFile(e.target.files[0])
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

  const handleSubmit = () => {
    alert(`answer: ${answer} nickname: ${nickname} email ${email}`)
  }


  if (props.show) {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>
          <h3> Submit Your Answer </h3>
          <span>{`${productName}: ${questionBody}`} </span>
          <form className={styles.questionForm} onSubmit={handleSubmit}>
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
            {/* <label> Upload your photos </label>
            <input type='file' id='image-uploads' accept="image/*" ref={ref} multiple onChange={ uploadFile }></input>
            {file && <img src={URL.createObjectURL(file)}/>} */}
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