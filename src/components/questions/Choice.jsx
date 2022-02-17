import React from "react";

export const Choice = ({ id, type, text, options, handleAnswer }) => {
  return (
    <div>
      {text}
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`radio-${id}-${index}`}
            name={id}
            value={option}
            onChange={() => handleAnswer(id, option)}
          />
          <label htmlFor={`radio-${id}-${index}`} name={id}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
