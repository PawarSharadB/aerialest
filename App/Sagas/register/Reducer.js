import {
  SAVE_USER_DATA_REQUEST,
  SAVE_USER_DATA_SUCCESS,
  SAVE_USER_DATA_ERROR,
  CLEAR_DATA
} from '../ActionTypes'

import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  userData: {},
  isFetching: false,
  success: false,
  error: null
})

const reducers = {
  [SAVE_USER_DATA_REQUEST]: state => {
    return Immutable.merge(state, { isFetching: true })
  },
  [SAVE_USER_DATA_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      isFetching: false,
      userData: action.userData.data,
      success: true,
      error: null
    })
  },
  [SAVE_USER_DATA_ERROR]: (state, { error }) => {
    return Immutable.merge(state, {
      error: error.response
        ? error.response.data.message
        : 'Something went wrong!',
      isFetching: false
    })
  },
  [CLEAR_DATA]: state => {
    return Immutable.merge(state, {
      userData: {}
    })
  }
}

export const reducer = createReducer(INITIAL_STATE, reducers)
