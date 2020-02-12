import {
  PROFILE_REQUEST,
  PROFILE_REQUEST_ERROR,
  PROFILE_REQUEST_SUCCESS
} from '../ActionTypes'

export const profileRequest = () => ({
  type: PROFILE_REQUEST
})

export const profileRequestSuccess = profile => ({
  type: PROFILE_REQUEST_SUCCESS,
  profile
})

export const profileRequestError = error => ({
  type: PROFILE_REQUEST_ERROR,
  error
})
