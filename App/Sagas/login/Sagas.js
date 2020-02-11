import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import * as Actions from './Actions'
import * as LoginUser from '../login/Actions'
import { URL } from '../../Assets/Constants'

const loginApi = ({ loginData }) => {
  const requestUrl = `${URL}/integration/customer/token`
  return axios.post(requestUrl, loginData)
}

export function* userLogin(action) {
  try {
    const response = yield call(loginApi, action)
    console.log('data', response)
    yield put(LoginUser.loginRequestSuccess(response))
  } catch (error) {
    console.log(error)
    yield put(Actions.loginRequestError(error))
  }
}
