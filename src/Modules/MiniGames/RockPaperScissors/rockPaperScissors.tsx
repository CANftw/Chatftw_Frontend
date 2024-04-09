import styles from "./rockPaperScissors.module.css";
import heart from "./Assets/heart.svg";
import rock from "./Assets/rock.svg";
import paper from "./Assets/paper.svg";
import scissors from "./Assets/scissors.svg";
import scissorsBlue from "./Assets/scissorsBlue.svg";
import paperBlue from "./Assets/paperBlue.svg";
import rockBlue from "./Assets/rockBlue.svg";
import { useState, useEffect, useRef } from "react";
function RockPaperScissors() {
  const [myLives, setMyLives] = useState(3);
  const [botLives, setBotLives] = useState(3);
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedImgBlue, setSelectedImgBlue] = useState("");
  const [selection, setSelection] = useState("");
  const [botSelectedImg, setBotSelectedImg] = useState("");
  const [botSelectedImgBlue, setBotSelectedImgBlue] = useState("");
  const [botSelected, setBotSelected] = useState(2);
  const [stage, setStage] = useState(0);
  const [result, setResult] = useState("");
  const botImage = useRef<HTMLImageElement>(null);
  const userImage = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (result === "win") {
        botImage.current!.src = botSelectedImgBlue;
      } else if (result === "lose") {
        userImage.current!.src = selectedImgBlue;
      }
    }, 4000);
  }, [
    result,
    selectedImg,
    selectedImgBlue,
    botSelectedImg,
    botSelectedImgBlue,
  ]);
  function handleSelection(chosen: string) {
    let botSelection = Math.floor(Math.random() * 3);
    setBotSelected(Math.floor(botSelection));
    botSelection == 0
      ? (setBotSelectedImg(scissors),
        setBotSelectedImgBlue(scissorsBlue),
        chosen == "scissors"
          ? setResult("tie")
          : chosen == "paper"
          ? (setResult("lose"), setMyLives(myLives - 1))
          : (setResult("win"), setBotLives(botLives - 1)))
      : botSelection == 1
      ? (setBotSelectedImg(paper),
        setBotSelectedImgBlue(paperBlue),
        chosen == "scissors"
          ? (setResult("win"), setBotLives(botLives - 1))
          : chosen == "paper"
          ? setResult("tie")
          : (setResult("lose"), setMyLives(myLives - 1)))
      : (setBotSelectedImg(rock),
        setBotSelectedImgBlue(rockBlue),
        chosen == "scissors"
          ? (setResult("lose"), setMyLives(myLives - 1))
          : chosen == "paper"
          ? (setResult("win"), setBotLives(botLives - 1))
          : setResult("tie"));
    setStage(1);
  }
  function handleReset() {
    setStage(0);
    setMyLives(3);
    setBotLives(3);
  }
  return (
    <>
      <div className={styles.container}>
        {stage == 0 && (
          <>
            <div className={styles.captions}>
              <span>Rock paper scissors</span>
              <br />
              Choose your play
            </div>
            <div className={styles.icons}>
              <div
                className={styles.iconsimg}
                onClick={() => {
                  setSelection("scissors");
                  setSelectedImg(scissors);
                  setSelectedImgBlue(scissorsBlue);
                  handleSelection("scissors");
                }}
              >
                <img src={scissors} />
              </div>
              <div
                className={styles.iconsimg}
                onClick={() => {
                  setSelection("paper");
                  setStage(1);
                  setSelectedImg(paper);
                  setSelectedImgBlue(paperBlue);
                  handleSelection("paper");
                }}
              >
                <img src={paper} />
              </div>
              <div
                className={styles.iconsimg}
                onClick={() => {
                  setSelection("rock");
                  setStage(1);
                  setSelectedImg(rock);
                  setSelectedImgBlue(rockBlue);
                  handleSelection("rock");
                }}
              >
                <img src={rock} />
              </div>
            </div>
          </>
        )}
        {stage == 1 && (
          <>
            <div className={styles.captions}>
              <div className={styles.firstText}>
                <span>You choose {selection}</span>
              </div>
              <div className={styles.secondText}>
                <span>
                  Computer chose {botSelected == 0 && "scissors"}
                  {botSelected == 1 && "paper"}
                  {botSelected == 2 && "rock"}
                </span>
              </div>

              <div className={styles.fourthText}>Waiting for opponent</div>
              <div className={styles.fifthText}>
                {result == "lose" && "The odds aren't looking good"}
                {result == "win" && "It's looking good for you"}
                {result == "tie" && "Looks like a tough fight"}
              </div>
            </div>
            <div
              className={`${styles.icons} ${styles.gap} ${
                myLives == 0
                  ? styles.lifeZero
                  : botLives == 0
                  ? styles.lifeZero
                  : ""
              }`}
            >
              <div
                className={`${styles.iconsimg} ${styles.slideToRight} ${
                  styles.popUp
                } ${result == "lose" ? styles.loser : ""}`}
              >
                <img id="userIcon" ref={userImage} src={selectedImg} />
              </div>
              <div
                className={`${styles.iconsimg} ${styles.slideToLeft} ${
                  result == "win" ? styles.loserBot : ""
                }`}
              >
                <img id="botIcon" ref={botImage} src={botSelectedImg} />
              </div>
            </div>
            <div
              className={`${styles.thirdText} ${styles.gap} ${
                myLives == 0
                  ? styles.lifeZeroText
                  : botLives == 0
                  ? styles.lifeZeroText
                  : ""
              }
              }`}
            >
              <span>It's a {result} </span>
            </div>
            <div
              className={`${styles.button} ${
                myLives == 0 || botLives == 0 ? styles.endButton : ""
              }`}
            >
              {(myLives == 0 || botLives == 0) && (
                <>
                  <button onClick={handleReset}>Start Over</button>
                </>
              )}
              {myLives != 0 && botLives != 0 && (
                <>
                  <button onClick={() => setStage(0)}>Play again</button>
                </>
              )}
            </div>
            <div className={styles.resultText}>
              <span>
                {myLives == 0 && <>You are out of lives</>}
                {botLives == 0 && <>You are Victorious</>}
              </span>
            </div>
            <div className={styles.resultText}>
              {myLives == 0 && <>no worries try again</>}
              {botLives == 0 && <>play again?</>}
            </div>
          </>
        )}
        {myLives >= 0 && (
          <>
            <div className={`${styles.lives}  ${styles.paddingAdjust}`}>
              <div className={styles.livesMe}>
                <span>You</span>
                <br />
                <div className={styles.hearts}>
                  <img
                    src={heart}
                    className={`${myLives == 0 ? styles.lifeRemove : ""}`}
                  />
                  <img
                    src={heart}
                    className={`${myLives <= 1 ? styles.lifeRemove : ""}`}
                  />
                  <img
                    src={heart}
                    className={`${myLives <= 2 ? styles.lifeRemove : ""}`}
                  />
                </div>
              </div>
              <div className={styles.livesBot}>
                <span>Bot</span>
                <br />
                <div className={styles.hearts}>
                  <img
                    src={heart}
                    className={`${botLives == 0 ? styles.lifeRemove : ""}`}
                  />
                  <img
                    src={heart}
                    className={`${botLives <= 1 ? styles.lifeRemove : ""}`}
                  />
                  <img
                    src={heart}
                    className={`${botLives <= 2 ? styles.lifeRemove : ""}`}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default RockPaperScissors;
