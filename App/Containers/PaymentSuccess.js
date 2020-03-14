import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Images from '../Images'

const SuccessScreen = props => {
  return (
    <View style={styleSheet.mainView}>
      <Image source={Images.paypalSuccess} />
      <Text style={styleSheet.successText}></Text>
    </View>
  )
}
export default SuccessScreen

const styleSheet = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300
  },
  successText: {
    fontWeight: 'bold',
    fontSize: 18
  }
})
