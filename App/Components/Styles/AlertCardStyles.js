import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
const { style: fontStyles } = Fonts

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    marginTop: 10
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
  }
})

export default styles
