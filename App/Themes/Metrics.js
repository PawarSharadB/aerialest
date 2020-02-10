import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  buttons: {
    large: 12,
    medium: 9,
    small: 7,
    xsmall: 6,
    borderRadius: 2,
    roundedBtnBorderRadius: 32,
    roundedBtnBorderWidth: 1.6,
    regularWidth: 160,
    regularHeight: 48,
    smallWidth: 104,
    smallHeight: 38,
    tinyWidth: 80,
    tinyHeight: 36,
    extraSmallWidth: 64,
    extraSmallHeight: 40,
    shadowOffsetWidth: 0,
    shadowOffsetHeight: 2,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation4: 4,
    elevation2: 2,
    elevation1: 1,
    pressOpacity: 0.7,
    minWidth100: 100
  },
  spacing: {
    noSpace: 0,
    superMicro: 2,
    micro: 4,
    tiny: 8,
    xsmall: 12,
    small: 16,
    section: 24,
    large: 48,
    xlarge: 64
  }
}

export default metrics
