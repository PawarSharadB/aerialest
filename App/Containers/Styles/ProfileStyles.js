import { StyleSheet } from 'react-native'
import { Metrics, Fonts, ApplicationStyles } from '../../Themes/'
const { style: fontStyles } = Fonts

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 20
  },
  card: {
    backgroundColor: '#f59c42',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
    //alignSelf: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  }
})
