
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
export default function Home() {

  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <h1 className={styles.homeTitle}>Welcome to the <span>Chatroom!</span></h1>
      <button className={styles.homeButton} onClick={() => navigate("/login")}>Get Started</button>
    </div>
  );
}
