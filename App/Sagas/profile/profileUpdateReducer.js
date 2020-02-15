import {
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_ERROR
} from '../ActionTypes'

import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  profileData: {},
  isUpdateFetching: false,
  updateSuccess: false,
  updateError: null
})

const reducers = {
  [PROFILE_UPDATE_REQUEST]: state => {
    return Immutable.merge(state, { isUpdateFetching: true })
  },
  [PROFILE_UPDATE_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      isUpdateFetching: false,
      profileData: action.profileData,
      updateSuccess: true,
      updateError: null
    })
  },
  [PROFILE_UPDATE_ERROR]: (state, { error }) => {
    return Immutable.merge(state, {
      updateError: error.response.data.message,
      isUpdateFetching: false,
      updateSuccess: false
    })
  }
}

export const reducer = createReducer(INITIAL_STATE, reducers)
