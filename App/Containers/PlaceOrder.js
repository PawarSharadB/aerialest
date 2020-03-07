import React from 'react'
import { View, Text } from 'react-native'
import Button from '../Components/Button'

const PlaceOrder = props => {
  const onOrderPress = () => {
    const { navigation } = props
    navigation.navigate('PromoCode')
  }
  return (
    <View>
      <Text>PlaceOrder</Text>
      <Button onPress={onOrderPress} text={'Order'} />
    </View>
  )
}

export default PlaceOrder
