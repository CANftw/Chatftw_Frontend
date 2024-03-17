import styles from "./primaryBtn.module.css"
import Arrow from "./Assets/Arrow.svg"

type Props = {
  name: string
  onClick?: () => void
}

function PrimaryBtn(props: Props) {
  return (
    <>
      <button className={styles.btn} onClick={props.onClick}>
        <div>{props.name}</div>
        <div><img src={Arrow} /></div>
      </button>
    </>
  )
}

export default PrimaryBtn;

