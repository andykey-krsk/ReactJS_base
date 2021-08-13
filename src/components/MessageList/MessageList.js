import { useState, useEffect } from "react"
import { SendForm } from ".././SendForm/SendForm"
import { Message } from "./Message/Message"
import "./MessageList.scss"

const botMessage = {
  author: "bot",
  text: "Welcome! How are you feeling",
}

const timeOut = 1500

export function MessageList() {
  const [messages, setMessages] = useState([])

  const [value, setValue] = useState("")

  const handleSendMessage = () => {
    if (value !== "") {
      setMessages((state) => [...state, { value, author: "me" }])
      setValue("")
    }
  }

  const handlePressInput = ({ code }) => {
    if (code === "Enter" && value) {
      setMessages((state) => [...state, { value, author: "me" }])
      setValue("")
    }
  }

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]

    if (lastMessage?.author === "me") {
      setTimeout(() => {
        setMessages((state) => [
          ...state,
          { value: botMessage.text, author: botMessage.author },
        ])
      }, timeOut)
    }
  }, [messages])

  return (
    <div className="message-container">
      <div className="message-list">
        {messages.map((message, id) => (
          <Message messages={message.value} author={message.author} key={id} />
        ))}
      </div>
      <div>
        <SendForm
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={handleSendMessage}
          onKeyPress={handlePressInput}
        />
      </div>
    </div>
  )
}
