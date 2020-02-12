import {
  PASSWORD_REQUEST,
  PASSWORD_REQUEST_SUCCESS,
  PASSWORD_REQUEST_ERROR
} from '../ActionTypes'
export const passwordRequest = passwordData => ({
  type: PASSWORD_REQUEST,
  passwordData
})

export const passwordSuccess = passwordData => ({
  type: PASSWORD_REQUEST_SUCCESS,
  passwordData
})

export const passwordError = error => ({
  type: PASSWORD_REQUEST_ERROR,
  error
})
