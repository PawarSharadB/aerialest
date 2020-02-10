import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, Image } from 'react-native'
import styles from './Styles/ButtonStyles'
import { Metrics } from '../Themes'

const Button = ({
  text,
  showText = true,
  onPress,
  style,
  showSmallText = false,
  textStyle,
  disabled = false,
  disableTimeout = 1000,
  addShadow = false
}) => {
  const [disableButton, setDisableButton] = useState(disabled)
  const handlePress = () => {
    setDisableButton(true)
    if (onPress) {
      onPress()
    }
    setTimeout(() => {
      setDisableButton(false)
    }, disableTimeout)
  }
  return (
    <TouchableOpacity
      activeOpacity={Metrics.buttons.pressOpacity}
      style={[
        styles.button,
        showSmallText ? styles.smallButton : {},
        style,
        addShadow ? styles.buttonShadow : {}
      ]}
      onPress={handlePress}
      disabled={disableButton}
    >
      {showText ? (
        <Text
          numberOfLines={1}
          style={[
            showSmallText ? styles.smallButtonText : styles.buttonText,
            textStyle
          ]}
          testID={`btnText_${id}`}
          accessibilityLabel={`btnText_${id}`}
          accessible
        >
          {text}
        </Text>
      ) : null}
    </TouchableOpacity>
  )
}
