import React from "react";
import "./Result.css";

function Result({ answers }) {
  const totalCorrectAnswers = answers.reduce((count, answer) => {
    if (answer.isCorrect) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div id="result">
      <h1> Quiz Results</h1>
      {answers.map((answer, index) => (
        <div id="item" key={index}>
          <p>Selected index: {answer.chosenIndex}</p>
          <p>Correct answer index: {answer.correctIndex}</p>
          <p>Is the selected index correct: {answer.isCorrect.toString()}</p>
        </div>
      ))}
      <h3>
        Total Correct Answers: {totalCorrectAnswers}/{answers.length}
      </h3>
    </div>
  );
}

export default Result;
