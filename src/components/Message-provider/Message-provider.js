import { useMemo, useState, useCallback, useEffect } from "react"
import { useParams } from "react-router-dom"

const timeOut = 1500

export function MessageProvider({ children }) {
  const { roomId } = useParams()

  const botMessage = useMemo(() => {
    return {
      message: `Welcome! How are you feeling - ${roomId}`,
      author: "Bot",
    }
  }, [roomId])

  const [conversations, setConversations] = useState([
    { title: "room1", value: "" },
    { title: "room2", value: "" },
  ])

  const [messages, setMessages] = useState({
    room1: [{ message: "Привет, room1!", author: "me", date: new Date() }],
    room2: [{ message: "Привет, room2!", author: "me", date: new Date() }],
  })

  const updateConversations = useCallback(
    (value = "") => {
      setConversations((conversations) =>
        conversations.map((conversation) => {
          return conversation.title === roomId
            ? { ...conversation, value }
            : conversation
        })
      )
    },
    [roomId]
  )

  const state = useMemo(() => {
    return {
      conversations,
      allMessages: messages,
      messages: messages[roomId] || [],
      value:
        conversations.find((conversation) => conversation.title === roomId)
          ?.value || "",
    }
  }, [conversations, messages, roomId])

  const actions = useMemo(() => {
    return {
      //
      sendMessage: (message) => {
        const newMessage = { ...message, date: new Date() }

        setMessages((messages) => {
          return {
            ...messages,
            [roomId]: [...(messages[roomId] || []), newMessage],
          }
        })

        updateConversations()
      },

      //
      handleChangeValue: (e) => {
        const { value } = e.target

        updateConversations(value)
      },
    }
  }, [roomId, updateConversations])

  useEffect(() => {
    let timerId = null
    const lastMessage = messages[roomId][messages[roomId].length - 1]

    if (lastMessage?.author === "me") {
      timerId = setTimeout(() => actions.sendMessage(botMessage), timeOut)
    }

    return () => clearInterval(timerId)
  }, [messages, botMessage, roomId, actions])

  return children([state, actions])
}
