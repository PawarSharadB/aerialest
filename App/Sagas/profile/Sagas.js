import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'

import * as Actions from './Actions'
import * as Profile from '../profile/Actions'
import { URL } from '../../Assets/Constants'

const registerApi = async action => {
  const requestUrl = `${URL}/customers/me`
  const token = await AsyncStorage.getItem('token')
  const parsedToked = JSON.parse(token).data
  // prettier-ignore
  const headerParams = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${parsedToked}`
  }
  return axios.get(requestUrl, headerParams)
}

export function* getProfileData(action) {
  try {
    const response = yield call(registerApi, action)
    yield put(Profile.profileRequestSuccess(response))
  } catch (error) {
    yield put(Actions.profileRequestError(error))
  }
}
