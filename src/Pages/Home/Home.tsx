
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
export default function Home() {

  const navigate = useNavigate();

  return (
    <div className={styles["home-container"]}>
      <h1 className={styles["home-title"]}>Welcome to the Chatroom!</h1>
      <p className={styles["home-description"]}>Join the conversation and connect with others.</p>
      <button className={styles["home-button"]} onClick={() => navigate("/login")}>Get Started</button>
    </div>
  );
}
