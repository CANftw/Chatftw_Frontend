import React, { useState, useEffect } from "react";
import styles from "./memoryGame.module.css";

function MemoryGame() {
  const [sequence, setSequence] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [userInput, setUserInput] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  
  const startNewRound = () => {
    setUserInput([]);
    setGameOver(false);
    let newSequence = [...sequence, generateRandomButton()];
    setSequence(newSequence);
    console.log(newSequence);
    animateSequence(newSequence); 
  };

  const generateRandomButton = () => {
    const buttons = ["X", "Y", "A", "B"];
    return buttons[Math.floor(Math.random() * buttons.length)];

  };

  const animateSequence = (sequence) => {
    let i = 0;
    const intervalId = setInterval(() => {
      blinkButton(sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(intervalId);
      }
    }, 1000);
  };

  const blinkButton = (button) => {
    const buttonElement = document.getElementById(button);
    if (buttonElement) {
      buttonElement.classList.add(styles.blink);
      setTimeout(() => {
        buttonElement.classList.remove(styles.blink);
      }, 500);
    }
  };

  const handleButtonClick = (button: any) => {
    if (!gameOver) {
      setUserInput([...userInput, button]);
      if (button !== sequence[userInput.length]) {
        setGameOver(true);
        setSequence([]);
        if (currentScore > highScore) {
          setHighScore(currentScore);
        }
        setCurrentScore(0);
      } else if (userInput.length === sequence.length - 1) {
        setCurrentScore(currentScore + 1);
        startNewRound();
      }
    }
  };



  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.containerContent}>
          <h1>Memory game</h1>
          <p>Pay attention to the pattern</p>
        </div>
        <div className={styles.containerInnerBoxes}>
          {["X", "Y", "A", "B"].map((button) => (
            <div
              key={button}
              id={button}
              className={`${styles.boxes}`}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </div>
          ))}
        </div>
         <div className={styles.scorebutton}>
        <div className={styles.containerInnerScores}>
          <div className={styles.scores}>Current score: {currentScore}</div>
          <div className={styles.scores}>High score: {highScore}</div>
        </div>
        <button className={styles.startButton} onClick={startNewRound}>
          Start New Round
        </button>
       </div>
      </div>
    </div>
  );
}

export default MemoryGame;
