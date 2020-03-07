import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
const { style: fontStyles } = Fonts

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#E2F0DF',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10
  },
  text: {
    //textAlign: 'center',
    color: '#5B6656',
    fontSize: 16
  }
})

export default styles
