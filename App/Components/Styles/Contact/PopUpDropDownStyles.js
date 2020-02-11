import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../../Themes'
export const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: Metrics.spacing.tiny,
    marginVertical: Metrics.spacing.small,
    marginHorizontal: Metrics.spacing.small
  },
  titleListTile: {
    fontFamily: Fonts.raleWay.regular
  },
  image: {
    width: 20,
    height: 20
  }
})
