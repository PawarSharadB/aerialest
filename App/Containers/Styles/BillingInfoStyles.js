import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes'
const { style: fontStyles } = Fonts

export default StyleSheet.create({
  mainView: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 16
  },
  buttonsContainer: {
    flex: 1,
    marginBottom: 10
  },
  commonTextStyle: {
    ...fontStyles.buttonM,
    fontSize: 20,
    color: '#ffffff'
  },
  commonButton: {
    height: 56,
    flex: 1,
    backgroundColor: '#0485B2',
    justifyContent: 'center',
    borderRadius: 4
  },
  contentScrollView: {
    flex: 1
  }
})
