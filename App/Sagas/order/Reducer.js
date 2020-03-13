import Immutable from 'seamless-immutable'
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR
} from '../ActionTypes'

import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  orderData: {},
  isPlacingOrder: false,
  orderSuccess: false,
  orderError: null
})

const reducers = {
  [PLACE_ORDER_REQUEST]: state => {
    return Immutable.merge(state, { isPlacingOrder: true })
  },
  [PLACE_ORDER_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      isPlacingOrder: false,
      orderData: action.orderData,
      orderSuccess: true,
      orderError: null
    })
  },
  [PLACE_ORDER_ERROR]: (state, { error }) => {
    return Immutable.merge(state, {
      orderError: error.response
        ? error.response.data.message
        : 'Something went wrong!',
      isPlacingOrder: false,
      orderSuccess: false
    })
  }
}

export const reducer = createReducer(INITIAL_STATE, reducers)
