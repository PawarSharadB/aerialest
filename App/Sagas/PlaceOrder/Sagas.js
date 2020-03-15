import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { URL } from '../../Assets/Constants'
import { put } from 'redux-saga/effects'
import { getPricesFailure, getPricesSuccess } from './Actions'
const getPriceApiCall = token => {
  const url = URL + '/mobileapp/getPrices'
  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function* getPricesForPlaceOrder() {
  try {
    const token = yield AsyncStorage.getItem('token')
    const response = yield getPriceApiCall(token)
    const { data } = response
    yield put(getPricesSuccess(JSON.parse(data)))
  } catch (error) {
    console.log(error)
    yield put(getPricesFailure())
  }
}
