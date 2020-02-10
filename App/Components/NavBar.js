import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Images from '../Images'

export default NabvBar = props => {
  const {
    navigationProps: { toggleDrawer }
  } = props
  return (
    <View style={sytles.mainView}>
      <TouchableOpacity
        onPress={() => {
          toggleDrawer()
        }}
      >
        <Image source={Images.menu} />
      </TouchableOpacity>
    </View>
  )
}
const sytles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    marginLeft: 10
  },
  imageStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  }
})
