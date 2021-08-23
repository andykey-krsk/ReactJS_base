import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types"

export const gistsStart = (gists) => ({ type: GET_GISTS_START, payload: gists })
export const gistsSuccess = () => ({ type: GET_GISTS_SUCCESS })
export const gistsError = (error) => ({ type: GET_GISTS_ERROR, payload: error })
