import { useState } from 'react';
import TextField from '../../Modules/Input/textInput';
import PasswordField from '../../Modules/Input/passwordInput';
import PrimaryBtn from '../../Modules/Button/PrimaryBtn';
import SecondaryBtn from '../../Modules/Button/secondaryBtn';
import styles from './signUp.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const baseUrl = 'http://localhost:8080';

  const handleSignUp = async () => {
    try {
      // Make API call to your localhost
      const response = await axios.post(`${baseUrl}/api/v1/auth/register`, {
        "email": email,
        "username": username,
        "password": password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      console.log(response);
      // Handle response, e.g., redirect to chatroom upon successful signup
      if (response.status === 200) {
        navigate('/login');
      } else {
        // Handle other cases, e.g., display error message
      }
    } catch (error) {
      // Handle error, e.g., display error message
      console.error('Error signing up:', error);
    }
  };

  return (
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
            <TextField placeholder={'Username'} value={username} onChange={(e:any) => setUsername(e.target.value)} />
            <TextField placeholder={'Email'} value={email} onChange={(e:any) => setEmail(e.target.value)} />
            <PasswordField value={password} onChange={(e:any) => setPassword(e.target.value)} />
          </div>
          <div className={styles.signupButtons}>
            <PrimaryBtn name="SignUp" onClick={handleSignUp} />
            <SecondaryBtn name="Log In instead" onClick={() => navigate('/login')} />
          </div>
        </div>
      </div>
    </div>
  );
}
