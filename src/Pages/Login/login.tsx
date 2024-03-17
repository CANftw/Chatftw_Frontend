import styles from "./login.module.css";
import PrimaryBtn from "../../Modules/Button/PrimaryBtn";
import SecondaryBtn from "../../Modules/Button/secondaryBtn";
import TextInput from "../../Modules/Input/textInput";
import PasswordInput from "../../Modules/Input/passwordInput";
import { useNavigate } from "react-router-dom";
import image from "./Assets/Frame 55.png"

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className={styles.login}>
      <div className={styles.loginBoundingbox}>
        <div className={styles.loginBoundingboxText}>
          <p>
            HERME<span>SPHERE</span>
          </p>
          <div className={styles.loginBoundingboxTextInner}>
            <h1>Login to your account</h1>
            <h3>Enter your credential to continue</h3>
          </div>
          <TextInput />
          <PasswordInput />
          <div className={styles.loginButtons}>
            <PrimaryBtn name="Login" onClick={()=>{navigate("/chatroom")}} />
            <SecondaryBtn name="Sign up instead" onClick={() => { navigate('/signup') }} />
          </div>
        </div>
        </div>

    </div>
  );
}
