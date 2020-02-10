import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
const { style: fontStyles } = Fonts

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.aquaBlue70,
    borderRadius: Metrics.buttons.borderRadius,
    minWidth: Metrics.buttons.regularWidth,
    height: Metrics.buttons.regularHeight
  },
  smallButton: {
    minWidth: Metrics.buttons.smallWidth,
    height: Metrics.buttons.smallHeight
  },
  buttonText: {
    paddingVertical: Metrics.spacing.small,
    paddingHorizontal: Metrics.spacing.tiny,
    marginTop: Metrics.spacing.superMicro,
    color: Colors.white,
    textAlign: 'center'
  },
  smallButtonText: {
    paddingVertical: Metrics.spacing.small,
    paddingHorizontal: Metrics.spacing.tiny,
    color: Colors.white,
    textAlign: 'center'
  },
  imageLeft: {
    width: Metrics.spacing.section,
    height: Metrics.spacing.section
  },
  buttonShadow: {
    shadowColor: Colors.shadow4,
    shadowOffset: {
      width: Metrics.buttons.shadowOffsetWidth,
      height: Metrics.buttons.shadowOffsetHeight
    },
    shadowOpacity: Metrics.buttons.shadowOpacity,
    shadowRadius: Metrics.buttons.shadowRadius,
    elevation: Metrics.buttons.elevation2
  },
  commonTextStyle: {
    ...fontStyles.buttonM
  },
  commonButton: {
    marginTop: Metrics.spacing.xlarge,
    height: 56,
    justifyContent: 'center',
    borderRadius: 4
  }
})
export default styles
