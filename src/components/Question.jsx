import React from "react";
import { Choice } from "./questions/Choice";
import { Input } from "./questions/Input";
import { Textarea } from "./questions/Textarea";
import "./Question.css";

const getComponent = (kind) => {
  switch (kind) {
    case "input":
      return Input;
    case "textarea":
      return Textarea;
    case "choice":
      return Choice;
    default:
      return null;
  }
};

export const Question = ({ id, type, text, options, handleAnswer }) => {
  const Component = getComponent(type);

  return (
    <div className="Question-box">
      {Component ? (
        <Component
          id={id}
          text={text}
          options={options}
          handleAnswer={handleAnswer}
        />
      ) : null}
    </div>
  );
};
