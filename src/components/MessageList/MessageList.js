import { useRef } from "react"
import { SendForm } from ".././SendForm/SendForm"
import { Message } from "./Message/Message"
import "./MessageList.scss"

export const MessageList = ({
  messages,
  value,
  sendMessage,
  handleChangeValue,
}) => {
  const ref = useRef()

  const handleSendMessage = () => {
    if (value) {
      sendMessage({ author: "me", message: value })
    }
  }

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="message-container">
      <div ref={ref} className="message-list">
        {messages.map((message, id) => (
          <Message key={id} {...message} />
        ))}
      </div>
      <div>
        <SendForm
          value={value}
          onChange={handleChangeValue}
          onClick={handleSendMessage}
          onKeyPress={handlePressInput}
        />
      </div>
    </div>
  )
}
