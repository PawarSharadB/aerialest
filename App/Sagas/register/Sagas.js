import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import * as Actions from './Actions'
import * as RegisterUser from '../register/Actions'
import { URL } from '../../Assets/Constants'

const registerApi = userData => {
  return axios.request({
    method: 'post',
    url: `${URL}/customers`,
    data: userData
  })
}

export function* saveUserdata(action) {
  try {
    yield put(Actions.saveUserDataRequest())
    debugger
    let { data } = yield call(registerApi, action.userData)
    yield put(RegisterUser.saveUserDataSuccess(data))
  } catch (e) {
    yield put(Actions.saveUserDataError(e.message))
  }
}
