import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

import { View } from 'react-native'
import { reset } from '../Sagas/login/Actions'

export const SignoutScreen = props => {
  useEffect(() => {
    const { reset } = props
    clear()
    reset()
  }, [])
  const clear = async () => {
    await AsyncStorage.clear()
    props.navigation.navigate('App')
  }
  return <View />
}
const mapDispatchToProps = dispatch => ({
  reset: () => {
    dispatch(reset())
  }
})

export default connect(null, mapDispatchToProps)(SignoutScreen)
