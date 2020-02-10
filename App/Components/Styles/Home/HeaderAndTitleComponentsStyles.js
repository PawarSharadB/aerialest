import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../../Themes'
const { raleWay } = Fonts

export const headerStyles = StyleSheet.create({
  mainView: {
    paddingHorizontal: Metrics.spacing.small
  },
  text: {
    fontFamily: raleWay.semiBold,
    fontSize: 18,
    paddingVertical: Metrics.spacing.tiny,
    textAlign: 'left'
  }
})
export const titleStyles = StyleSheet.create({
  mainView: {
    paddingHorizontal: Metrics.spacing.small
  },
  text: {
    fontFamily: raleWay.regular,
    fontSize: 14,
    lineHeight: 20
  }
})
