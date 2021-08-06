import { useState, useEffect } from "react"
import { Header } from "./components/Header/Header"
import { Message } from "./components/Message/Message"
import { SendForm } from "./components/SendForm/SendForm"
import "./styles/app.scss"

const botMessage = {
  author: "bot",
  text: "Welcome! How are you feeling",
}

const timeOut = 1500

export function App() {
  const [messages, setMessages] = useState([])

  const [value, setValue] = useState("")

  const handleSendMessage = () => {
    if (value !== "") {
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
    <div>
      <Header />
      <ul>
        {messages.map((message, id) => (
          <li key={id}>
            <Message messages={message.value} author={message.author} />
          </li>
        ))}
      </ul>
      <SendForm
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClick={handleSendMessage}
      />
    </div>
  )
}
