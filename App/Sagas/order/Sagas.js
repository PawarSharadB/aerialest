import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'

import * as Actions from './Actions'
import { URL } from '../../Assets/Constants'

const placeOrderApi = (orderData, token = 'dummy') => {
  // prettier-ignore
  const tokenUpdated = token ? token : 'Dummy'
  const headerParams = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenUpdated}`
  }
  const requestUrl = `${URL}/mobileapp/order`
  return fetch(requestUrl, {
    method: 'POST',
    headers: headerParams,
    body: JSON.stringify(orderData)
  })
}

export function* placeOrder(action) {
  try {
    const token = yield AsyncStorage.getItem('token')
    const response = yield placeOrderApi(action.orderData, token)
    const jsonResponse = yield response.json()
    yield put(Actions.placeOrderSuccess(JSON.parse(jsonResponse)))
  } catch (error) {
    yield put(Actions.placeOrderError(error))
  }
}
