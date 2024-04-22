import React, { useState, useCallback } from "react";
import "./App.css";
import questions from "./components/questions";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";

function App() {
  const [answers, setAnswers] = useState([]);

  const handleSelectAnswer = useCallback(
    (index) => {
      setAnswers([
        ...answers,
        {
          chosenIndex: index,
          correctIndex: questions[answers.length].correctAnswer,
          isCorrect: questions[answers.length].correctAnswer === index,
        },
      ]);
    },
    [answers.length]
  );

  let output;

  if (questions.length === answers.length) {
    output = <Result answers={answers} />;
  } else {
    output = (
      <div id="quiz">
        <h3>Question Number: {answers.length + 1}</h3>
        <Quiz
          question={questions[answers.length]}
          handleSelectAnswer={handleSelectAnswer}
          key={answers.length}
          questionIndex={answers.length}
          numberOfQuestions={questions.length}
        />
      </div>
    );
  }

  return <React.Fragment>{output}</React.Fragment>;
}

export default App;
