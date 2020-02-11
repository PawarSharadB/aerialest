import { StyleSheet } from 'react-native'
import { Fonts } from '../../../Themes'
export const styles = StyleSheet.create({
  listViewComponent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#424242',
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  titleListTile: {
    color: 'white',
    fontFamily: Fonts.raleWay.regular,
    marginLeft: 20
  },
  image: {
    position: 'absolute',
    width: 20,
    height: 20,
    right: 20
  }
})
