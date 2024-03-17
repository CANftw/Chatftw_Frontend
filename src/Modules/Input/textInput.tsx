import React, { useState } from 'react';
import styles from './textInput.module.css';

function TextInput() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    if (event.target.value === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className={`${styles.inputContainer} ${isFocused ? styles.focused : ''}`}>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label>Username</label>
    </div>
  );
}

export default TextInput;
