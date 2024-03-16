import React from 'react'
import styles from "./textField.module.css"

export default function TextField() {
  return (
      <div  className={styles.put}>
          <input type="text" /> <span>Username</span>
    </div>
  )
}


