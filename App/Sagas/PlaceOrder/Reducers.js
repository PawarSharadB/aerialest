import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'
import {
  GET_PRICES_REQUEST,
  GET_PRICES_REQUEST_SUCCESS,
  GET_PRICES_REQUEST_FAILURE
} from '../ActionTypes'
const INITIAL_STATE = Immutable({
  isLoading: true,
  error: null,
  updatedTime: Date(),
  data: {}
})
const reducers = {
  [GET_PRICES_REQUEST]: state =>
    Immutable.merge(state, {
      isLoading: true,
      updatedTime: Date()
    }),
  [GET_PRICES_REQUEST_SUCCESS]: (state, { payload: data }) =>
    Immutable.merge(state, { isLoading: false, updatedTime: Date(), data }),
  [GET_PRICES_REQUEST_FAILURE]: (state, { error }) =>
    Immutable.merge({
      isLoading: false,
      error: error.response
        ? error.response.data.message
        : 'Something went wrong!',
      updatedTime: Date()
    })
}
export const reducer = createReducer(INITIAL_STATE, reducers)
