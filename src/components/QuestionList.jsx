import React, { useState } from "react";
import { Question } from "./Question";

export const QuestionList = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [disabled, setDisabled] = useState(true);

  const handleAnswer = (id, value) => {
    setAnswers((oldAnswers) => {
      oldAnswers[id] = value;
      setDisabled(Object.keys(oldAnswers).length !== questions.length);
      return oldAnswers;
    });
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Question key={index} {...question} handleAnswer={handleAnswer} />
      ))}
      <button onClick={() => onSubmit(answers)} disabled={disabled}>
        Submit
      </button>
    </div>
  );
};
