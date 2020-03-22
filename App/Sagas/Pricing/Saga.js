import { getPricesSuccess, getPricingFailure } from './Actions'
import AsyncStorage from '@react-native-community/async-storage'
import { URL } from '../../Assets/Constants'
import { put } from 'redux-saga/effects'

const getPricingService = token => {
  const url = URL + '/mobileapp/pricePageDetails'
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
}
export function* getPricing() {
  try {
    const token = yield AsyncStorage.getItem('token')
    const responseObj = yield getPricingService(JSON.parse(token))
    const responseJson = yield responseObj.json()
    yield put(getPricesSuccess(JSON.parse(responseJson)))
  } catch (error) {
    yield put(getPricingFailure(error))
  }
}
