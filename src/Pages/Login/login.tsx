import React, { useState } from 'react';
import styles from './login.module.css';
import PrimaryBtn from '../../Modules/Button/PrimaryBtn';
import SecondaryBtn from '../../Modules/Button/secondaryBtn';
import TextInput from '../../Modules/Input/textInput';
import PasswordInput from '../../Modules/Input/passwordInput';
import { useNavigate } from 'react-router-dom';
import LoginImage from './Assets/Frame 55.png';
import axios from 'axios'; // Import Axios

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const baseUrl = 'http://localhost:8080/api/v1';

  const handleLogin = async () => {
    try {
      // Send the user's credentials to the server for verification using Axios
      const response = await axios.post(`${baseUrl}/auth/login`, { 
        "email": email, 
        "password": password 
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      

      // Redirect the user to the chatroom if login is successful
      navigate('/chatroom');
    } catch (error:any) {
      console.log(error);
      
      // Display an error message if login fails
      setError('Invalid username or password');
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginBoundingbox}>
        <div className={styles.loginBoundingboxText}>
          <p>
            HERME<span>SPHERE</span>
          </p>
          <div className={styles.loginBoundingboxTextInner}>
            <h1>Login to your account</h1>
            <h3>Enter your credentials to continue</h3>
          </div>
          <TextInput
            placeholder={'Username'}
            value={email}
            onChange={(e:any) => setEmail(e.target.value)}
          />
          <PasswordInput
            value={password}
            onChange={(e:any) => setPassword(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.loginButtons}>
            <PrimaryBtn name="Login" onClick={handleLogin} />
            <SecondaryBtn name="Sign up instead" onClick={() => navigate('/signup')} />
          </div>
        </div>
        <div className={styles['loginImage']}>
          <img src={LoginImage} alt="Login" />
        </div>
      </div>
    </div>
  );
}
