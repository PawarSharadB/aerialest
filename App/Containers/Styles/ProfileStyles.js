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
  },
  scrollView: {
    flex: 1
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row'
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
  cancelBtn: {
    backgroundColor: '#f8f8f8'
  },
  cardView: {
    flex: 1
  },

  text: {
    textAlign: 'center',
    color: '#fff'
  }
})
