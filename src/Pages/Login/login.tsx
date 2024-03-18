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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const baseUrl = 'http://localhost:8080';

  const handleLogin = async () => {
    try {
      // Send the user's credentials to the server for verification using Axios
      const response = await axios.post(`${baseUrl}/api/login`, { 
        "email": username, 
        "passwird": password });

      if (!response.data.success) {
        throw new Error('Login failed');
      }

      // Redirect the user to the chatroom if login is successful
      navigate('/chatroom');
    } catch (error) {
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
