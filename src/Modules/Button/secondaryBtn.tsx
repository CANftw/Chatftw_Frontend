import React from 'react'
import styles from "./secondaryBtn.module.css"

function SecondaryBtn(props) {
  return (
    <>
      <button className={styles.btn}>{props.name}</button>
    </>
  )
}

export default SecondaryBtn

