const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic',
  natoSans: 'HelveticaNeue'
}
const raleWay = {
  regular: 'Raleway-Regular',
  semiBold: 'Raleway-SemiBold'
}
const size = {
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  titleLarge: {
    fontFamily: type.natoSans,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.0018
  },
  buttonM: {
    fontFamily: type.natoSans,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.16
  },
  buttonS: {
    fontFamily: type.natoSans,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: -0.016
  },
  headLineL: {
    fontFamily: type.natoSans,
    fontSize: 28,
    lineHeight: 37,
    fontWeight: 'normal',
    letterSpacing: 0.0018
  },
  buttonN: {
    fontFamily: type.natoSans,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.016
  },
  captionS: {
    fontFamily: type.natoSans,
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 15
  }
}

export default {
  type,
  size,
  style,
  raleWay
}
