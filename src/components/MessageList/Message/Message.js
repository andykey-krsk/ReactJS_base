import classNames from "classnames"
import styles from "./Message.module.scss"

export function Message({ author, message }) {
  return (
    <div
      className={classNames(styles.message, {
        [styles.right]: author === "me",
      })}
    >
      <div className={styles.text}>
        <span>{author}: </span>
        <p>{message}</p>
        <p className={styles.time}>00.00</p>
      </div>
    </div>
  )
}
