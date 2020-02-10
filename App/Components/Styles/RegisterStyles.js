import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'
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
  }
})
