import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'

import * as Actions from './Actions'
import * as LoginUser from '../login/Actions'
import { URL } from '../../Assets/Constants'

const loginApi = ({ loginData }) => {
  const headerParams = {
    'Content-Type': 'application/json'
  }
  const requestUrl = `${URL}/integration/customer/token`
  return axios.post(requestUrl, loginData, headerParams)
}

export function* userLogin(action) {
  try {
    const response = yield call(loginApi, action)
    //Save the response.data in aysnc storage
    yield AsyncStorage.setItem('token', JSON.stringify(response))

    yield put(LoginUser.loginRequestSuccess(response))
  } catch (error) {
    console.log(error)
    yield put(Actions.loginRequestError(error))
  }
}
