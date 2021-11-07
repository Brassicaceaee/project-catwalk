import React from 'react';
import { useFormik } from 'formik';

const FormikAnswerForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.

  const formik = useFormik({
    initialValues: {
      answer: '',
      nickname: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="answer">Your Answer</label>
      <input
        id="answer"
        name="answer"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer}
      />

      <label htmlFor="nickname">Your Nickname</label>
      <input
        id="nickname"
        name="nickname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nickname}
      />

      <label htmlFor="email">Your Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikAnswerForm;