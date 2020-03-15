import Immutable from 'seamless-immutable'
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR
} from '../ActionTypes'

import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  successData: {},
  isFetching: false,
  success: false,
  error: null
})

const reducers = {
  [PLACE_ORDER_REQUEST]: state => {
    return Immutable.merge(state, { isPlacingOrder: true })
  },
  [PLACE_ORDER_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      isFetching: false,
      successData: action.successData,
      success: true,
      error: null
    })
  },
  [PLACE_ORDER_ERROR]: (state, { error }) => {
    return Immutable.merge(state, {
      error: error.response
        ? error.response.data.message
        : 'Something went wrong!',
      isFetching: false,
      success: false
    })
  }
}

export const reducer = createReducer(INITIAL_STATE, reducers)
