
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Hermes from "./assests/Hermes.png"
import Arrow from "./assests/Arrow.svg"
export default function Home() {

  const navigate = useNavigate();

  return (
    <div className={styles["home-container"]}>
      <div>
      <h1 className={styles["home-title"]}>HERME<span>SPHERE</span></h1>
      <p className={styles["home-description"]}>Join the conversation and Speak freely.</p>
      <button className={styles["home-button"]} onClick={() => navigate("/login")}>Start Chatting <img src={Arrow} alt="" /></button>
      </div>
      <img src={Hermes} alt="" />
    </div>
  );
}
