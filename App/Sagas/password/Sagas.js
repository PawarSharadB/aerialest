import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import * as Password from '../password/Actions'
import { URL } from '../../Assets/Constants'

const passwordApi = ({ passwordData }) => {
  const requestUrl = `${URL}/customers/password`
  const headerParams = {
    'Content-Type': 'application/json'
  }
  return axios.put(requestUrl, passwordData, headerParams)
  //return fetch(requestUrl, { method: 'GET', headers: headerParams })
}

export function* getPasswordData(action) {
  try {
    const response = yield call(passwordApi, action)
    yield put(Password.passwordSuccess(response))
  } catch (error) {
    yield put(Password.passwordError(error))
  }
}
