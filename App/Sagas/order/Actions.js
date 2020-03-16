import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR
} from '../ActionTypes'

export const placeOrderRequest = orderData => ({
  type: PLACE_ORDER_REQUEST,
  orderData
})

export const placeOrderSuccess = successData => ({
  type: PLACE_ORDER_SUCCESS,
  successData
})

export const placeOrderError = error => ({
  type: PLACE_ORDER_ERROR,
  error
})
