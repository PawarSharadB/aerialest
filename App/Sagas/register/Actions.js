import * as ActionTypes from '../ActionTypes'

export const saveUserDataRequest = () => ({
  type: ActionTypes.SAVE_USER_DATA_REQUEST
})
export const saveUserDataSuccess = userData => ({
  type: ActionTypes.SAVE_USER_DATA_SUCCESS,
  userData
})
export const saveUserDataError = error => ({
  type: ActionTypes.SAVE_USER_DATA_ERROR,
  error
})
