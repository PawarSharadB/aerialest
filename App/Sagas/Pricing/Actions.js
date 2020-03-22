import {
  GET_PRICING_REQUEST,
  GET_PRICING_SUCCESS,
  GET_PRICING_FAILURE
} from '../ActionTypes'
export const getPrices = () => ({
  type: GET_PRICING_REQUEST
})
export const getPricesSuccess = payload => ({
  type: GET_PRICING_SUCCESS,
  payload
})
export const getPricingFailure = () => ({
  type: GET_PRICING_FAILURE
})
