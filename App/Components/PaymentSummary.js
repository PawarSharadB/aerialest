import React from 'react'
import { View, Text } from 'react-native'

const PaymentSummary = props => {
  const data = props.navigation.state.params.successData
  return (
    <View>
      <Text style={{ color: '#000000' }}>{data}</Text>
    </View>
  )
}

export default PaymentSummary
