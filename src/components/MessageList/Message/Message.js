import classNames from "classnames"
import styles from "./Message.module.scss"

export function Message({ author, message, date }) {
  return (
    <div
      className={classNames(styles.message, {
        [styles.right]: author === "me",
      })}
    >
      <div className={styles.text}>
        <span>{author}: </span>
        <p>{message}</p>
        <p className={styles.time}>{date.toLocaleTimeString().slice(0, -3)}</p>
      </div>
    </div>
  )
}
