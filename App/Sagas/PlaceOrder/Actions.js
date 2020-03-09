import {
  GET_PRICES_REQUEST,
  GET_PRICES_REQUEST_FAILURE,
  GET_PRICES_REQUEST_SUCCESS
} from '../ActionTypes'

export const getPricesRequest = () => ({
  type: GET_PRICES_REQUEST
})
export const getPricesSuccess = payload => ({
  type: GET_PRICES_REQUEST_SUCCESS,
  payload
})
export const getPricesFailure = () => ({
  type: GET_PRICES_REQUEST_FAILURE
})
