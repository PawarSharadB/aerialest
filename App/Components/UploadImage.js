import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Button from './Button'

const UploadImage = props => {
  const { onPress, title, buttonTitle } = props
  return (
    <View style={styles.mainView} onPress={onPress}>
      <Button
        onPress={onPress}
        style={styles.button}
        text={buttonTitle}
        textStyle={styles.buttonText}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center'
  },
  button: {
    maxHeight: 40,
    backgroundColor: '#0485B2',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#ffffff'
  },
  title: {
    marginLeft: 10
  }
})
export default UploadImage
