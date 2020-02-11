import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR
} from '../ActionTypes'

export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const loginRequestSuccess = loginData => ({
  type: LOGIN_REQUEST_SUCCESS,
  loginData
})

export const loginRequestError = error => ({
  type: LOGIN_REQUEST_ERROR,
  error
})
