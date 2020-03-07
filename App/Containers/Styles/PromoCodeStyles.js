import { StyleSheet } from 'react-native'
import { Metrics, Fonts, ApplicationStyles } from '../../Themes/'
const { style: fontStyles } = Fonts

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 20
  },
  buttonsView: {
    flexDirection: 'row'
  },
  promocodeInput: {
    marginTop: 10
  },
  button: {
    width: '50%',
    height: 60
  },
  applyButton: {
    backgroundColor: '#69C7E3'
  },
  skipButton: {
    backgroundColor: '#0085B2'
  },
  btnTextStyle: {
    fontSize: 16,
    color: '#ffffff'
  }
})
