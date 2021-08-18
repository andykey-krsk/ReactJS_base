import {
  TOGLE_NAME_VISIBLE,
  CHANGE_PROFILE_INFO,
  TOGGLE_CHECKBOX,
} from "./types"

const initialState = {
  isEnabled: true,
  user: {
    firstName: "Test name",
    surName: "Test surname",
    city: "Test city",
    theme: "dark",
  },
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_NAME_VISIBLE:
      return {
        ...state,
        nameVisible: !state.nameVisible,
      }
    case CHANGE_PROFILE_INFO:
      return {
        ...state,
        firstName: state.user.firstName,
        surName: state.user.surName,
        city: state.user.city,
        theme: state.user.theme,
      }
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        isEnabled: !state.isEnabled,
      }
    default:
      return state
  }
}
