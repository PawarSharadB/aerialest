import {
  PASSWORD_REQUEST,
  PASSWORD_REQUEST_SUCCESS,
  PASSWORD_REQUEST_ERROR
} from '../ActionTypes'

import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  passwordData: {},
  isFetching: false,
  success: false,
  error: null
})

const reducers = {
  [PASSWORD_REQUEST]: state => {
    return Immutable.merge(state, { isFetching: true })
  },
  [PASSWORD_REQUEST_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      isFetching: false,
      loginData: action.passwordData,
      success: true,
      error: null
    })
  },
  [PASSWORD_REQUEST_ERROR]: (state, { error }) => {
    return Immutable.merge(state, {
      error: error.response.data.message,
      isFetching: false,
      success: false
    })
  }
}

export const reducer = createReducer(INITIAL_STATE, reducers)
