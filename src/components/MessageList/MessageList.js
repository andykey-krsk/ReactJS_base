import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { handleChangeMessageValueFB } from "../../store/conversations"
import { sendMessageWithThunk, editMessageThunk } from "../../store/messages"
import { SendForm } from ".././SendForm/SendForm"
import { Message } from "./Message/Message"

import "./MessageList.scss"

export const MessageList = () => {
  const ref = useRef()
  const { roomId } = useParams()
  const dispatch = useDispatch()

  const messages = useSelector((state) => {
    return state.messages.messages[roomId] || []
  })

  const updateMessageId = useSelector((state) => {
    return state.conversations.updateMessageId
  })

  const value = useSelector(
    (state) =>
      state.conversations.conversations.find(
        (conversation) => conversation.title === roomId
      )?.value || ""
  )

  const handleSendMessage = () => {
    if (value) {
      if (updateMessageId) {
        dispatch(editMessageThunk(value, roomId, updateMessageId))
        return
      }

      dispatch(sendMessageWithThunk({ author: "User", message: value }, roomId))
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
            dispatch(handleChangeMessageValueFB(e.target.value, roomId))
          }
          onClick={handleSendMessage}
          onKeyPress={handlePressInput}
        />
      </div>
    </div>
  )
}
