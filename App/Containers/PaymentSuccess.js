import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, BackHandler } from 'react-native'
import Images from '../Images'

const SuccessScreen = props => {
  const navigateToHome = () => props.navigation.navigate('Home')
  useEffect(() => {
    setTimeout(() => navigateToHome(), 5000)
    const backhandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigateToHome()
      }
    )
    return () => backhandler.remove()
  }, [])
  return (
    <View style={styleSheet.mainView}>
      <Image source={Images.paypalSuccess} style={styleSheet.image} />
      <Text style={styleSheet.successText}>Payment Success</Text>
    </View>
  )
}
export default SuccessScreen

const styleSheet = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'stretch'
  },
  successText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
    color: '#00457C'
  }
})
