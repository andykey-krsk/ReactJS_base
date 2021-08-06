import "./Message.scss"

export function Message(props) {
  return (
    <div className="message">
      <div className="text">
        <span>{props.author}: </span>
        {props.messages}
      </div>
    </div>
  )
}
