import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import * as Actions from './Actions'
import * as RegisterUser from '../register/Actions'
import { URL } from '../../Assets/Constants'

const registerApi = ({ userData }) => {
  const requestUrl = `${URL}/customers`
  return axios.post(requestUrl, userData)
}

export function* saveUserdata(action) {
  try {
    const response = yield call(registerApi, action)
    yield put(RegisterUser.saveUserDataSuccess(response))
  } catch (error) {
    yield put(Actions.saveUserDataError(error))
  }
}
