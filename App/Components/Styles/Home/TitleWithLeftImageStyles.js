import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../../Themes'

export const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.spacing.small,
    paddingVertical: Metrics.spacing.tiny
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  text: {
    textAlign: 'justify',
    fontFamily: Fonts.raleWay.regular,
    marginHorizontal: Metrics.spacing.xsmall,
    fontSize: 14,
    lineHeight: 20
  }
})
