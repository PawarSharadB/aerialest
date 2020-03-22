import { StyleSheet, Dimensions } from 'react-native'
import { Fonts } from '../../Themes/'
const { style: fontStyles } = Fonts

let ScreenHeight = Dimensions.get('window').height

export default StyleSheet.create({
  cardView: {
    marginTop: 5,
    marginHorizontal: 10
  },
  card: {
    backgroundColor: '#DCDCDC',
    padding: 10
  },
  contentView: {
    flex: 1,
    height: ScreenHeight,
    backgroundColor: '#ADDCEE',
    borderRadius: 5,
    paddingTop: 16,
    paddingHorizontal: 16
  },
  grayLine: { height: 1, width: '100%', backgroundColor: '#B4D4DF' },
  title: {
    borderRadius: 15,
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 5,
    backgroundColor: '#fff'
  },
  subTitle: {
    padding: 10,
    fontSize: 16
  },
  commonTextStyle: {
    ...fontStyles.buttonM,
    color: '#fff'
  },
  commonButton: {
    height: 56,
    backgroundColor: '#0085B2',
    justifyContent: 'center',
    borderRadius: 4
  }
})
