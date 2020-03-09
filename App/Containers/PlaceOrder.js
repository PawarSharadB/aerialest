import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import SelectionWithText from '../Components/SelectionWithText'
import OrderWithTrailReport from '../Components/Orders/MainComponents/OrderWithTrailReport'
import OrderWithoutTrailReport from '../Components/Orders/MainComponents/OrderWithoutTrailReport'
const PlaceOrder = props => {
  const [isTrailReport, toggleTrailReport] = useState(false)
  const {
    navigation: { state }
  } = props
  const placeOrder = () => {
    const { navigation } = props
    navigation.navigate('PromoCode')
  }
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <View>
          <Text>Latitude: {state.params.region.latitude}</Text>
          <Text>Longitude: {state.params.region.longitude}</Text>
        </View>
        <SelectionWithText
          isSelected={isTrailReport}
          type="square"
          onSelect={() => toggleTrailReport(prevResult => !prevResult)}
          title={'Trial Report'}
        />
        {isTrailReport && <OrderWithTrailReport onPress={placeOrder} />}
        {!isTrailReport && <OrderWithoutTrailReport onPress={placeOrder} />}
      </View>
    </ScrollView>
  )
}
export default PlaceOrder
