import TextInput from '../../Modules/Input/textInput'
import PasswordInput from '../../Modules/Input/passwordInput'
import PrimaryBtn from '../../Modules/Button/PrimaryBtn'
import SecondaryBtn from '../../Modules/Button/secondaryBtn'
import styles from './signUp.module.css'
import { useNavigate } from "react-router-dom";
export default function signUp() {

  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.signup}>
        <div className={styles.signupBoundingbox}>
          <div className={styles.signupBoundingboxText}>
            <p>
              HERME<span>SPHERE</span>
            </p>
            <div className={styles.signupBoundingboxTextInner}>
              <h1>Login to your account</h1>
              <h3>Enter your credential to continue</h3>
            </div>
            <TextInput />
            <PasswordInput />
            <div className={styles.signupButtons}>
              <PrimaryBtn name="SignUp" />
              <SecondaryBtn name="Log In instead" onClick={() => { navigate('/login') }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
