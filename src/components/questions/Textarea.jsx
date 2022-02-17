import React from "react";

export const Textarea = ({ id, text, handleAnswer }) => {
  return (
    <div>
      <p> {text} </p>
      <textarea
        id={id}
        rows="4"
        cols="50"
        onChange={(e) => {
          handleAnswer(id, e.target.value);
        }}
      ></textarea>
    </div>
  );
};
