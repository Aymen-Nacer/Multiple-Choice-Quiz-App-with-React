import React, { useState } from "react";
import TimerQuestion from "../TimerQuestion/TimerQuestion";
import QuestionChoices from "../QuestionChoices/QuestionChoices";

function Quiz({
  question,
  handleSelectAnswer,
  questionIndex,
  numberOfQuestions,
}) {
  const [style, setStyle] = useState(null);

  console.log("number of questions", numberOfQuestions);

  function handleStyleAnswer(selectedIndex) {
    if (numberOfQuestions !== questionIndex) {
      if (selectedIndex === -5) {
        if (style === null) handleSelectAnswer(selectedIndex);
      } else {
        if (question.correctAnswer === selectedIndex) {
          setStyle("correct-answer");
        } else {
          setStyle("wrong-answer");
        }
        setTimeout(() => {
          handleSelectAnswer(selectedIndex);
          setStyle(null);
        }, 1500);
      }
    }
  }

  return (
    <div>
      <p id="questionText">{question.question}</p>
      <TimerQuestion handleStyleAnswer={handleStyleAnswer} timerTime={10000} />
      <QuestionChoices
        handleStyleAnswer={handleStyleAnswer}
        questionChoices={question.choices}
        style={style}
      />
    </div>
  );
}

export default Quiz;
