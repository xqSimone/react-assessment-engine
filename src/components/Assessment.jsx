import React, { useState, useEffect } from "react";
import { QuestionList } from "./QuestionList";
import { AnswerList } from "./AnswerList";

export const Assessment = ({ id, name, description }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((value) => !value);
  };

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(null);

  const fetchData = () => {
    return fetch(
      `${process.env.REACT_APP_API_URL}/questions/?assessmentId=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      });
  };

  useEffect(() => {
    if (!open) return [];
    fetchData();
  }, [open]);

  const onSubmit = (value) => {
    setAnswers(value);
    return;
  };

  return (
    <div>
      <button
        className={open ? "App-link-open" : "App-link"}
        onClick={handleClick}
      >
        {name}
      </button>
      <p>{description}</p>
      {open && !answers ? (
        <QuestionList questions={questions} onSubmit={onSubmit} />
      ) : null}
      {open && answers ? (
        <AnswerList questions={questions} answers={answers} />
      ) : null}
    </div>
  );
};
