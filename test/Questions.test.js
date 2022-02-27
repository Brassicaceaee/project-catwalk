import React from "react";
import { render } from '@testing-library/react';

import { ProductProvider } from "../src/context/ProductContext";
import Questions from "../src/components/questions/Questions.jsx"
import QuestionList from "../src/components/questions/QuestionList.jsx";
import Question from "../src/components/questions/IndividualQuestion.jsx";
import AddQuestion from "../src/components/questions/AddQuestion.jsx";
import QuestionForm from "../src/components/questions/AddQuestionForm.jsx";
import AnswerList from "../src/components/questions/AnswerList.jsx";
import Answer from "../src/components/questions/Answer.jsx";
import AddAnswer from "../src/components/questions/AddAnswer.jsx";
import AnswerForm from "../src/components/questions/FormAnswer.jsx";

describe('Questions', () => {
  test('renders Questions component', () => {
    render(<ProductProvider><Questions /></ProductProvider>);
  });
});

describe('QuestionList', () => {
  test('renders QuestionList component', () => {
    render(<ProductProvider><QuestionList /></ProductProvider>);
  });
});

describe('Question', () => {
  test('renders Question component', () => {
    render(<ProductProvider><Question /></ProductProvider>);
  });
});

describe('AddQuestion', () => {
  test('renders AddQuestion component', () => {
    render(<ProductProvider><AddQuestion /></ProductProvider>);
  });
});

describe('QuestionForm', () => {
  test('renders QuestionForm component', () => {
    render(<ProductProvider><QuestionForm /></ProductProvider>);
  });
});

describe('AnswerList', () => {
  test('renders AnswerList component', () => {
    render(<ProductProvider><AnswerList /></ProductProvider>);
  });
});

describe('Answer', () => {
  test('renders Answer component', () => {
    render(<ProductProvider><Answer /></ProductProvider>);
  });
});

describe('AddAnswer', () => {
  test('renders AddAnswer component', () => {
    render(<ProductProvider><AddAnswer /></ProductProvider>);
  });
});

describe('AnswerForm', () => {
  test('renders AnswerForm component', () => {
    render(<ProductProvider><AnswerForm /></ProductProvider>);
  });
});
