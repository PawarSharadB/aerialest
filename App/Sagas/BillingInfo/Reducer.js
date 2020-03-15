import Immutable from 'seamless-immutable'
import {
  BILLING_INFO_DROPDOWN_REQUEST,
  BILLING_INFO_DROPDOWN_SUCCESS,
  BILLING_INFO_DROPDOWN_FAILURE
} from '../ActionTypes'
import { createReducer } from '../CreateReducer'
const INITIAL_STATE = Immutable({
  data: [],
  isLoading: false,
  error: null,
  updatedTime: null
})
const reducers = {
  [BILLING_INFO_DROPDOWN_REQUEST]: state => {
    return Immutable.merge(state, { isLoading: true })
  },
  [BILLING_INFO_DROPDOWN_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      isLoading: false,
      error: null,
      data: action.payload
    })
  },
  [BILLING_INFO_DROPDOWN_FAILURE]: state => {
    return Immutable.merge(state, { error: true })
  }
}
export const reducer = createReducer(INITIAL_STATE, reducers)
