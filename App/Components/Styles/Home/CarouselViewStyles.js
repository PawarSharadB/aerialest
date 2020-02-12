import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('screen').width
export const itemWidth = width - 20
export const slideWidth = width - 20
export const itemHeight = 200

export const styles = StyleSheet.create({
  mainView: {
    width: width - 20,
    marginLeft: 10
  },
  imageStyles: {
    width: '100%',
    height: 200
  }
})
