import Immutable from 'seamless-immutable'
import {
  MY_ORDERS_REQUEST,
  MY_ORDERS_ERROR,
  MY_ORDERS_SUCCESS
} from '../ActionTypes'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  myOrder: {},
  isFetching: false,
  success: false,
  error: null
})
const reducers = {
  [MY_ORDERS_REQUEST]: state => {
    return Immutable.merge(state, { isFetching: true })
  },
  [MY_ORDERS_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      isFetching: false,
      myOrder: action.myOrder,
      success: true,
      error: null
    })
  },
  [MY_ORDERS_ERROR]: (state, { error }) => {
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
