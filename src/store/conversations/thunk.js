import debounce from "lodash.debounce"
import { db } from "../../api/firebase"
import {
  hamdleChangeMessageValue,
  conversationsStart,
  conversationsSuccess,
  conversationsError,
} from "./actions"
import { GET_CONVERSATIONS, GET } from "./types"

export const getConversationsFB =
  () =>
  (dispatch, _, { getConversationsApi }) => {
    getConversationsApi().then((snapshot) => {
      const conversations = []

      snapshot.forEach((snap) => {
        conversations.push(snap.val())
      })
      dispatch({ type: GET_CONVERSATIONS, payload: conversations })
    })
  }

const cb = debounce(async (updateConversation) => {
  updateConversation()
}, 500)

export const handleChangeMessageValueFB =
  (messageValue, roomId) =>
  async (dispatch, _, { updateConversation }) => {
    await cb(() => updateConversation(roomId, messageValue))

    dispatch(hamdleChangeMessageValue(messageValue, roomId))
  }
