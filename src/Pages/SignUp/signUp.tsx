import TextField from '../../Modules/Input/textInput'
import PasswordField from '../../Modules/Input/passwordInput'
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
              <h1>Signup</h1>
              <h3>Enter your credential to continue</h3>
            </div>
            <div className={styles.signupField}>
            <TextField />
            <PasswordField/>
            </div>
            <div className={styles.signupButtons}>
              <PrimaryBtn name="SignUp" onClick={()=>{navigate('/chatroom')}} />
              <SecondaryBtn name="Log In instead" onClick={() => { navigate('/login') }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
