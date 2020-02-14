import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'
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
    flex: 1,
    justifyContent: 'center',
    borderRadius: 4
  },
  contentScrollView: {
    flex: 1
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  cancelBtn: {
    backgroundColor: '#f8f8f8'
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
