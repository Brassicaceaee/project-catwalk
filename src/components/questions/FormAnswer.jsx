import React, {useState, useEffect, useRef} from 'react';
import styles from './questions.module.css';
import {useProductContext} from '../../context/ProductContext.jsx';

const AnswerForm = (props) => {

  // Store variables from context
  const {info} = useProductContext();
  const productName = info.name;

  const [uploadArray, setUploadArray] = useState([]);
  let imageInput = document.getElementById('image-uploads');

  useEffect(() => {
    // updateArray(ref.current);
  }, [uploadArray])

  const handleUpload = (e) => {
    console.log(e.target.files[0])
    setUploadArray(uploadArray => [...uploadArray, e.target.files[0]]);
    uploadFile(e);
    // updateArray(uploadArray => [...uploadArray, e.target.files[0]])
  }

  const [file, setFile] = useState()
  const ref = useRef(null);

  const uploadFile = (e) => {
    setFile(e.target.files[0])
  }
  // Create state for input fields
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
          <span>{productName} </span>
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