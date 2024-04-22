import React, { useEffect, useState } from "react";
import "./TimerQuestion.css";

function TimerQuestion({ handleStyleAnswer, timerTime }) {
  const [timeLeft, setTimeLeft] = useState(timerTime / 1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleStyleAnswer(-5);
    }, timerTime);

    return () => clearTimeout(timer);
  }, [handleStyleAnswer, timerTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <progress
        className="progress-bar"
        value={timeLeft}
        max={timerTime / 1000}
      ></progress>
      <p>Time Left: {timeLeft} seconds</p>
    </React.Fragment>
  );
}

export default TimerQuestion;
