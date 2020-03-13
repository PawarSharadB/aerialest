import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import * as Actions from './Actions'
import { URL } from '../../Assets/Constants'

const placeOrderApi = ({ orderData }) => {
  const headerParams = {
    'Content-Type': 'application/json'
  }
  const requestUrl = `${URL}/mobileapp/addToCart`
  return axios.post(requestUrl, orderData, headerParams)
}

export function* placeOrder(action) {
  try {
    const response = yield call(placeOrderApi, action)
    yield put(Actions.placeOrderSuccess(response))
  } catch (error) {
    yield put(Actions.placeOrderError(error))
  }
}
