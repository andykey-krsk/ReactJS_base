import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import {
  hamdleChangeMessageValue,
  clearMessageValue,
} from "../.././store/conversations"
import { sendMessage } from "../.././store/messages"
import { SendForm } from ".././SendForm/SendForm"
import { Message } from "./Message/Message"

import "./MessageList.scss"

export const MessageList = () => {
  const ref = useRef()
  const { roomId } = useParams()
  const dispatch = useDispatch()

  const messages = useSelector((state) => state.messages.messages[roomId] || [])
  const value = useSelector(
    (state) =>
      state.conversations.conversations.find(
        (conversation) => conversation.title === roomId
      )?.value || ""
  )

  const handleSendMessage = () => {
    if (value) {
      dispatch(sendMessage({ author: "me", message: value }, roomId))
      dispatch(clearMessageValue(roomId))
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
          onChange={(e) =>
            dispatch(hamdleChangeMessageValue(e.target.value, roomId))
          }
          onClick={handleSendMessage}
          onKeyPress={handlePressInput}
        />
      </div>
    </div>
  )
}
