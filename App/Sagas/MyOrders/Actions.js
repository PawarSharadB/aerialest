import {
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_ERROR
} from '../ActionTypes'

export const myOrdersRequest = myOrder => ({
  type: MY_ORDERS_REQUEST,
  myOrder
})

export const myOrdersSuccess = myOrder => ({
  type: MY_ORDERS_SUCCESS,
  myOrder
})

export const myOrdersError = error => ({
  type: MY_ORDERS_ERROR,
  error
})
