import React from "react";
import styles from "./login.module.css";
import PrimaryBtn from "../../Modules/Button/primaryBtn.tsx";
import SecondaryBtn from "../../Modules/Button/secondaryBtn.tsx";
import TextInput from "../../Modules/Input/textInput.tsx";
import PasswordInput from "../../Modules/Input/passwordInput.tsx";

export default function Login() {
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
          <PasswordInput/>
          <div className={styles.loginButtons}>
            <PrimaryBtn name="Login" />
            <SecondaryBtn name="Sign up instead" />
          </div>
        </div>
      </div>
    </div>
  );
}
