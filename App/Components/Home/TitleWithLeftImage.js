import React from 'react'
import { View, Image, Text } from 'react-native'
import { styles } from '../Styles/Home/TitleWithLeftImageStyles'

export const TitleWithImage = props => {
  const { image, text } = props
  return (
    <View style={styles.mainView}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
