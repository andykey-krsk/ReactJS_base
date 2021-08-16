import {
  TOGLE_NAME_VISIBLE,
  CHANGE_PROFILE_INFO,
  TOGGLE_CHECKBOX,
} from "./types"
// action = { type: string, payload: нагрузка-любое значение }
// action creator
export const toggleNameVisible = () => ({ type: TOGLE_NAME_VISIBLE })
export const changeProfileInfo = () => ({ type: CHANGE_PROFILE_INFO })
export const toggleCheckbox = () => ({ type: TOGGLE_CHECKBOX })
