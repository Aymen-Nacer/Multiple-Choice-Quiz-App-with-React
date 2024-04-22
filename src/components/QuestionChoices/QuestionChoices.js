import React, { useRef } from "react";
import "./QuestionChoices.css";

function QuestionChoices({ handleStyleAnswer, questionChoices, style }) {
  const selectedAnswer = useRef(null);

  function submitAnswer(index) {
    selectedAnswer.current = index;
    handleStyleAnswer(index);
  }

  return (
    <div className="choices">
      {questionChoices.map((choice, index) => (
        <button
          key={index}
          className={selectedAnswer.current === index ? style : null}
          onClick={() => submitAnswer(index)}
          disabled={selectedAnswer.current !== null}
        >
          {choice}
        </button>
      ))}
    </div>
  );
}

export default QuestionChoices;
