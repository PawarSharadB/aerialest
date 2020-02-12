import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes'
export const styles = StyleSheet.create({
  mainView: {
    padding: Metrics.spacing.small
  },
  video: {
    color: Colors.aquaBlue50,
    fontFamily: Fonts.raleWay.regular,
    textDecorationLine: 'underline'
  },
  newToOrders: {
    fontFamily: Fonts.raleWay.regular
  },
  cardView: {
    padding: 10,
    marginTop: 10
  },
  button: {
    width: 150,
    backgroundColor: Colors.aquaBlue60,
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white'
  }
})
