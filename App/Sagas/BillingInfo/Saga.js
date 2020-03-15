import {
  getBillingInfoDropDown,
  billingFailure,
  billingInfoSuccess
} from './Actions'
import { put } from 'redux-saga/effects'
const getData = async () => {
  return fetch(
    'https://7cfou2ucvx0efz4y.mojostratus.io/rest/V1/directory/countries'
  )
}
export function* getBillingInfo() {
  try {
    const data = yield getData()
    const jsonData = yield data.json()
    yield put(billingInfoSuccess(jsonData))
  } catch {
    yield put(billingFailure)
  }
}
