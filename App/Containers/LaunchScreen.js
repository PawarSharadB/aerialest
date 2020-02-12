import React, { Component, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { View } from 'react-native'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.getToken()
  }
  getToken = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('App')
  }
  render() {
    return <View style={styles.mainContainer}></View>
  }
}
