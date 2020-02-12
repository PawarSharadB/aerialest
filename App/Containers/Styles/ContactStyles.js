import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes'
export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column'
  },
  cardView: {
    marginBottom: 20,
    marginHorizontal: 10,
    marginTop: Metrics.spacing.small,
    paddingLeft: Metrics.spacing.xsmall,
    paddingVertical: Metrics.spacing.small
  },
  emailUs: {
    fontFamily: Fonts.raleWay.semiBold,
    marginTop: Metrics.spacing.xsmall,
    color: '#696969'
  },
  email: {
    color: '#4179DC',
    fontFamily: Fonts.raleWay.regular,
    fontSize: Fonts.size.small,
    textDecorationLine: 'underline'
  },
  boldTitle: {
    fontFamily: Fonts.raleWay.semiBold,
    color: '#696969'
  },
  normalTitle: {
    fontFamily: Fonts.raleWay.regular,
    color: '#797979'
  },
  url: {
    fontFamily: Fonts.raleWay.semiBold,
    color: '#696969'
  },
  commoonMarginTop: {
    marginTop: Metrics.spacing.micro
  },
  contactUs: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.raleWay.semiBold
  },
  popUpListContainer: {
    marginHorizontal: 50,
    height: 200
  }
})
