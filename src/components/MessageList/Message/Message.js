import "./Message.scss"

export function Message({ author, message, date }) {
  const messageClass = () => {
    if (author === "me") {
      return "message right"
    } else {
      return "message"
    }
  }

  return (
    <div className={messageClass()}>
      <div className="text">
        <span>{author}: </span>
        <p>{message}</p>
        <p className="time">{date.toLocaleTimeString().slice(0, -3)}</p>
      </div>
    </div>
  )
}
