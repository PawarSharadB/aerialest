import {
  GET_PRICES_REQUEST,
  GET_PRICING_SUCCESS,
  GET_PRICING_FAILURE
} from '../ActionTypes'
import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'
const INITIAL_STATE = {
  isLoading: false,
  success: false,
  error: null,
  updatedTime: Date(),
  data: []
}
const reducers = {
  [GET_PRICES_REQUEST]: state => {
    return Immutable.merge(state, { isLoading: true })
  },
  [GET_PRICING_SUCCESS]: (state, action) => {
    const { payload } = action
    return Immutable.merge(state, {
      isLoading: false,
      updatedTime: Date(),
      data: payload,
      success: true
    })
  },
  [GET_PRICING_FAILURE]: (state, error) => {
    return Immutable.merge(state, {
      isLoading: false,
      updatedTime: Date(),
      error
    })
  }
}
export const reducer = createReducer(INITIAL_STATE, reducers)
