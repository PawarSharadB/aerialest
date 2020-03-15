import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'

import * as Actions from './Actions'
import { URL } from '../../Assets/Constants'

const placeOrderApi = ({ orderData }, token = 'dummy') => {
  // prettier-ignore
  const headerParams = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const requestUrl = `${URL}/mobileapp/order`
  //return axios.post(requestUrl, orderData, headerParams)
  return fetch(requestUrl, {
    headers: headerParams,
    body: JSON.stringify(orderData)
  })
}

export function* placeOrder(action) {
  try {
    const token = yield AsyncStorage.getItem('token')
    const response = yield placeOrderApi(action.orderData, token)
    yield put(Actions.placeOrderSuccess(response))
  } catch (error) {
    yield put(Actions.placeOrderError(error))
  }
}
