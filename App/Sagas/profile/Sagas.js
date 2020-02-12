import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import * as Actions from './Actions'
import * as Profile from '../profile/Actions'
import { URL } from '../../Assets/Constants'

const registerApi = () => {
  const requestUrl = `${URL}/customers/me`
  return axios.get(requestUrl)
}

export function* getProfileData(action) {
  try {
    const response = yield call(registerApi, action)
    yield put(Profile.profileRequestSuccess(response))
  } catch (error) {
    yield put(Actions.profileRequestError(error))
  }
}
