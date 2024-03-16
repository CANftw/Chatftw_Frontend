import React from 'react'
import styles from "./primaryBtn.module.css"
import Arrow from "./Assets/Arrow.svg"

function PrimaryBtn(props) {
  return (
    <>
      <button className={styles.btn}>
        <div>{props.name}</div>
        <div><img src={Arrow} /></div>
    </button>
    </>
  )
}

export default PrimaryBtn;

