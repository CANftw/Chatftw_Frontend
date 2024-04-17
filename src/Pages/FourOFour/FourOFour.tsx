import React from 'react';
import styles from './FourOFour.module.css'; // Import the CSS module
import Back from '../../Modules/Button/backBtn';
import { useNavigate } from 'react-router-dom';


const FourOFour: React.FC = () => {
    const navigate =useNavigate();
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>404 - Page Not Found</h1>
            <p className={styles.text}>The page you are looking for does not exist.</p>
            <Back name="Login" onClick={() => navigate('/login')}  />
            <div className={styles.animation}></div>
        </div>
    );
};

export default FourOFour;