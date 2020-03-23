import {
  getBillingInfoDropDown,
  billingFailure,
  billingInfoSuccess,
  billingInfoDataRequest,
  billingInfoDataSuccess,
  billingInfoDataFailure
} from './Actions'
import AsyncStorage from '@react-native-community/async-storage'
import { put } from 'redux-saga/effects'
import { URL } from '../../Assets/Constants'

const getData = async () => {
  return fetch(URL + '/directory/countries')
}
const billingInfoSevice = token => {
  return fetch(URL + '/customers/me/billingAddress', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
export function* getBillingInfo() {
  try {
    const data = yield getData()
    const jsonData = yield data.json()
    yield put(billingInfoSuccess(jsonData))
  } catch {
    yield put(billingFailure())
  }
}
export function* getBillingInfoData() {
  try {
    const token = yield AsyncStorage.getItem('token')
    const response = yield billingInfoSevice(JSON.parse(token))
    const jsonData = yield response.json()
    yield put(billingInfoDataSuccess(jsonData))
  } catch {
    yield put(billingInfoDataFailure())
  }
}
