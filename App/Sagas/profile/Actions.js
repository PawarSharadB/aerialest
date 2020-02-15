import {
  PROFILE_REQUEST,
  PROFILE_REQUEST_ERROR,
  PROFILE_REQUEST_SUCCESS,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_ERROR
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
export const profileUpdateRequest = profileData => ({
  type: PROFILE_UPDATE_REQUEST,
  profileData
})
export const profileUpdateSuccess = profileData => ({
  type: PROFILE_UPDATE_SUCCESS,
  profileData
})
export const profileUpdateError = error => ({
  type: PROFILE_UPDATE_ERROR,
  error
})
