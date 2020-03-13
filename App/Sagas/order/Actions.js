import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR
} from '../ActionTypes'

export const placeOrderRequest = orderData => ({
  type: PLACE_ORDER_REQUEST,
  orderData
})

export const placeOrderSuccess = orderData => ({
  type: PLACE_ORDER_SUCCESS,
  orderData
})

export const placeOrderError = error => ({
  type: PLACE_ORDER_ERROR,
  error
})
