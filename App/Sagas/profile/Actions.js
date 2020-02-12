import {
  PROFILE_REQUEST,
  PROFILE_REQUEST_ERROR,
  PROFILE_REQUEST_SUCCESS
} from '../ActionTypes'

export const profileRequest = profile => ({
  type: PROFILE_REQUEST,
  profile
})

export const profileRequestSuccess = profile => ({
  type: PROFILE_REQUEST_SUCCESS,
  profile
})

export const profileRequestError = error => ({
  type: PROFILE_REQUEST_ERROR,
  error
})
