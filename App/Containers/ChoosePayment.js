import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'

import { View, StyleSheet } from 'react-native'

const ChoosePayment = props => {
  const [payPal, setPaypal] = useState(false)
  const onSelect = () => {
    const { navigation } = props
    navigation.navigate('PayPalView')
    setPaypal(!payPal)
  }
  return (
    <View
      style={{
        alignItems: 'flex-start',
        marginTop: 20,
        marginHorizontal: 20
      }}
    >
      <CheckBox
        center
        title="Pay with Paypal"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={onSelect}
        wrapperStyle={{
          backgroundColor: 'transparent'
        }}
        textStyle={{
          fontSize: 16
        }}
        containerStyle={{
          backgroundColor: '#fff',
          borderWidth: 0
        }}
        checked={payPal}
      />
      <View
        style={{
          height: 1,
          paddingTop: 20,
          width: '100%',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#000000'
        }}
      />
    </View>
  )
}

export default ChoosePayment
