import React from 'react'
import { Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Images from '../Images'

const SelectionWithText = props => {
  let { isSelected, type, title, onSelect } = props
  let imageName = null
  if (type == 'square') {
    imageName = isSelected
      ? Images.selectedSquareBlack
      : Images.unSelectedSquareBlack
  } else {
    imageName = isSelected ? Images.selectedBlack : Images.unSelectBlack
  }
  return (
    <TouchableOpacity style={styles.mainView} onPress={onSelect}>
      <Image style={styles.image} source={imageName} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    padding: 5
  },
  image: {
    width: 20,
    height: 20
  },
  title: {
    marginLeft: 10,
    fontSize: 15,
    color: '#333333'
  }
})
export default SelectionWithText
