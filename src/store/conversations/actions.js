import { REMOVE_CONVERSATION } from "../types"
import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CLEAR_MESSAGE_VALUE,
  SET_MESSAGE_VALUE,
  CREATE_CONVERSATION,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
} from "./types"

export const hamdleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
})

export const clearMessageValue = (roomId) => ({
  type: CLEAR_MESSAGE_VALUE,
  payload: roomId,
})

export const setMessageValue = (message, roomId) => ({
  type: SET_MESSAGE_VALUE,
  payload: { message, roomId },
})

export const removeConversationById = (conversationId) => ({
  type: REMOVE_CONVERSATION,
  payload: conversationId,
})

export const createConversation = (title) => ({
  type: CREATE_CONVERSATION,
  payload: title,
})

export const conversationsStart = () => ({ type: GET_CONVERSATIONS_START })
export const conversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversations,
})
export const conversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error,
})
