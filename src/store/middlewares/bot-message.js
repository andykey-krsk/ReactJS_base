import { sendMessage } from "../messages"
import { SEND_MESSAGE } from "../messages/types"

export const botSendMessage = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE && action.payload.message.author === "me") {
    setTimeout(() => {
      store.dispatch(
        sendMessage(
          { author: "Bot", message: "Hello I'm bot. I like middlewares" },
          action.payload.roomId
        )
      )
    }, 500)
  }
  return next(action)
}
