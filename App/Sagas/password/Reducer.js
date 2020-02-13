import {
  PASSWORD_REQUEST,
  PASSWORD_REQUEST_SUCCESS,
  PASSWORD_REQUEST_ERROR
} from '../ActionTypes'

import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  isFetching: false,
  passwordData: {},
  passwordSuccess: false,
  passwordError: null
})

const reducers = {
  [PASSWORD_REQUEST]: state => {
    return Immutable.merge(state, { isFetching: true })
  },
  [PASSWORD_REQUEST_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      isFetching: false,
      passwordData: action.passwordData,
      passwordSuccess: true,
      passwordError: null
    })
  },
  [PASSWORD_REQUEST_ERROR]: (state, { error }) => {
    return Immutable.merge(state, {
      passwordError: error.response.data.message,
      isFetching: false,
      passwordSuccess: false
    })
  }
}

export const reducer = createReducer(INITIAL_STATE, reducers)
