import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Switch, Route, useHistory } from "react-router-dom"
import { LayoutChat, ChatList, MessageList } from "../components"
import { getConversationsFB } from "../store/conversations"
import { getMessagesFB } from "../store/messages"

export function Chat() {
  const { push } = useHistory()

  useEffect(() => {
    const listenExistChat = ({ code }) => {
      if (code === "Escape") {
        push("/chat")
      }
    }

    document.addEventListener("keydown", listenExistChat)

    return () => {
      document.removeEventListener("keydown", listenExistChat)
    }
  }, [push])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConversationsFB())
    dispatch(getMessagesFB())
  }, [dispatch])

  return (
    <Switch>
      <Route path={["/chat/:roomId", "/chat"]}>
        <LayoutChat chatList={<ChatList />}>
          <Route path="/chat/:roomId">
            <MessageList />
          </Route>
          <Route exact={true} path="/chat">
            <div className="center">
              <h2 className="h1">Выберите чат </h2>
            </div>
          </Route>
        </LayoutChat>
      </Route>
      <Route path="*">
        <div className="center">
          <h2>Нет такого чата</h2>
        </div>
      </Route>
    </Switch>
  )
}
