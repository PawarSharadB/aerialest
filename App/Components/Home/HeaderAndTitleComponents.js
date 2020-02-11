import React from 'react'
import { View, Text } from 'react-native'
import {
  headerStyles,
  titleStyles
} from '../Styles/Home/HeaderAndTitleComponentsStyles'

export const Header = props => {
  const { title } = props
  return (
    <View style={headerStyles.mainView}>
      <Text style={headerStyles.text}>{title}</Text>
    </View>
  )
}
export const Title = props => {
  const { title, style } = props
  return (
    <View style={[titleStyles.mainView, style]}>
      <Text style={titleStyles.text}>{title}</Text>
    </View>
  )
}
