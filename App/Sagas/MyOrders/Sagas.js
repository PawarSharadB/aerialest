import { put, call } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import * as Actions from './Actions'

import { URL } from '../../Assets/Constants'

const myOrdersApi = email => {
  const requestUrl = `${URL}/mobileapp/myOrders`
  const headerParams = {
    'Content-Type': 'application/json'
  }
  return axios.post(requestUrl, { email }, headerParams)
}

export function* myOrders(action) {
  try {
    const email = yield AsyncStorage.getItem('email')
    console.log('Saga email', email)
    const response = yield call(myOrdersApi, JSON.parse(email))
    const responseJson = JSON.parse(response.data)
    yield put(Actions.myOrdersSuccess(responseJson))
  } catch (error) {
    yield put(Actions.myOrdersError(error))
  }
}
