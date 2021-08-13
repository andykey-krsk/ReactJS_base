import "./Message.scss"

export function Message(props) {
  const messageClass = () => {
    if (props.author === "me") {
      return "message right"
    } else {
      return "message"
    }
  }
  return (
    <div className={messageClass()}>
      <div className="text">
        <span>{props.author}: </span>
        <p>{props.messages}</p>
        <p>00:00</p>
      </div>
    </div>
  )
}
