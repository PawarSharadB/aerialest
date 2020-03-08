import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import SelectionWithText from '../Components/SelectionWithText'
import OrderWithTrailReport from '../Components/Orders/MainComponents/OrderWithTrailReport'
import OrderWithoutTrailReport from '../Components/Orders/MainComponents/OrderWithoutTrailReport'
const Orders = props => {
  const [isTrailReport, toggleTrailReport] = useState(false)
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <SelectionWithText
          isSelected={isTrailReport}
          type="square"
          onSelect={() => toggleTrailReport(prevResult => !prevResult)}
          title={'Trial Report'}
        />
        {isTrailReport && <OrderWithTrailReport />}
        {!isTrailReport && <OrderWithoutTrailReport />}
      </View>
    </ScrollView>
  )
}
export default Orders
