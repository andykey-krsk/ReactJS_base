import { clearMessageValue } from "../conversations"
import { sendMessage } from "./actions"

export const sendMessageWithThunk = (message, roomId) => (dispatch) => {
  dispatch(sendMessage(message, roomId))
  dispatch(clearMessageValue(roomId))

  if (message.author === "me") {
    setTimeout(
      () =>
        dispatch(
          sendMessage({ author: "Bot", message: "This is THUNK" }, roomId)
        ),
      1500
    )
  }
}
