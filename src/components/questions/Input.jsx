import React from "react";

export const Input = ({ id, text, handleAnswer }) => {
  return (
    <div>
      <p>{text} </p>
      <input
        type="text"
        id={id}
        onChange={(e) => {
          handleAnswer(id, e.target.value);
        }}
      />
    </div>
  );
};
