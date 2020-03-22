import Immutable from 'seamless-immutable'
import {
  BILLING_INFO_DROPDOWN_REQUEST,
  BILLING_INFO_DROPDOWN_SUCCESS,
  BILLING_INFO_DROPDOWN_FAILURE,
  BILLING_INFO_DATA_REQUEST,
  BILLING_INFO_DATA_SUCCESS,
  BILLING_INFO_DATA_FAILURE
} from '../ActionTypes'
import { createReducer } from '../CreateReducer'
const INITIAL_STATE = Immutable({
  data: [],
  isLoading: false,
  error: null,
  updatedTime: null,
  isLoadingGetData: false,
  successData: false,
  errorGetData: null,
  getData: null,
  updatedTimeGetData: false
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
  },
  [BILLING_INFO_DATA_REQUEST]: state => {
    return Immutable.merge(state, { isLoadingGetData: true })
  },
  [BILLING_INFO_DATA_SUCCESS]: (state, action) => {
    return Immutable.merge(state, {
      getData: action.payload,
      isLoadingGetData: false,
      errorGetData: null,
      successData: true
    })
  },
  [BILLING_INFO_DATA_FAILURE]: state => {
    return Immutable.merge(state, {
      isLoadingGetData: false,
      errorGetData: 'UnOtherized User'
    })
  }
}
export const reducer = createReducer(INITIAL_STATE, reducers)
