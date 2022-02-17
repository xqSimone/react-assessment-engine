import React from "react";
import "./AnswerList.css";

export const AnswerList = ({ answers, questions }) => {
  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <div>
            <b>{question.text}</b>
          </div>
          <span className="Answer">{answers[question.id]}</span>
        </div>
      ))}
    </div>
  );
};
