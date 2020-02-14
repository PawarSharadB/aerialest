import { StyleSheet } from 'react-native'
import { Metrics, Fonts, ApplicationStyles } from '../../Themes/'
const { style: fontStyles } = Fonts

export default StyleSheet.create({
  mainView: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 16
  },
  commonTextStyle: {
    ...fontStyles.buttonM
  },
  commonButton: {
    height: 56,
    backgroundColor: '#0485B2',
    justifyContent: 'center',
    borderRadius: 4
  },
  forgotPassword: {
    height: 56,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 4,
    maxWidth: 150,
    alignSelf: 'center'
  },
  forgotPasswordText: {
    ...fontStyles.buttonM,
    textDecorationLine: 'underline',
    color: '#517BCD'
  },
  card: {
    backgroundColor: '#f59c42',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  },
  cardView: {
    marginTop: 40,
    flex: 1
  }
})
