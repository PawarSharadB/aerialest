import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR
} from '../ActionTypes'

import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  loginData: {},
  isFetching: false,
  error: null
})

const reducers = {
  [LOGIN_REQUEST]: state => {
    return Immutable.merge(state, { isFetching: true })
  },
  [LOGIN_REQUEST_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      isFetching: false,
      loginData: action.loginData,
      error: null
    })
  },
  [LOGIN_REQUEST_ERROR]: (state, { error }) => {
    return Immutable.merge(state, { error, isFetching: false })
  }
}

export const reducer = createReducer(INITIAL_STATE, reducers)
