import { SEND_MESSAGE } from "./types"

const initialState = {
  messages: {
    room1: [],
    room2: [
      {
        id: new Date(),
        author: "Bot",
        message: "Hello store room 2",
        date: new Date(),
      },
    ],
    room3: [
      {
        id: new Date(),
        author: "Bot",
        message: "Hello store room 3",
        date: new Date(),
      },
    ],
    room4: [
      {
        id: new Date(),
        author: "Bot",
        message: "Hello store room 4",
        date: new Date(),
      },
    ],
  },
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...state.messages[action.payload.roomId],
            { ...action.payload.message, id: new Date(), date: new Date() },
          ],
        },
      }
    default:
      return state
  }
}
