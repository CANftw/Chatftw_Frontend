import React from 'react';
import styles from './FourOFour.module.css'; // Import the CSS module

const FourOFour: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>404 - Page Not Found</h1>
            <p className={styles.text}>The page you are looking for does not exist.</p>
            <div className={styles.animation}></div>
        </div>
    );
};

export default FourOFour;