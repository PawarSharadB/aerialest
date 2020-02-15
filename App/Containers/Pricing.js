import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { pricingData } from '../Assets/pricingData'
import SingleOrder from '../Components/SingleOrder'
import styles from './Styles/PricingStyles'

const Pricing = props => {
  const onOrderSelect = () => {
    const { navigation } = props
    navigation.navigate('OrdersStack')
  }
  const FlatListItemSeparator = () => {
    return (
      <View style={{ height: 1, width: '100%', backgroundColor: '#fff' }} />
    )
  }
  const getOrders = order => {
    return (
      <SingleOrder
        id={order.price}
        title={order.title}
        price={order.price}
        sub1={order.sub1}
        sub2={order.sub2}
        sub3={order.sub3}
        sub4={order.sub4}
        sub5={order.sub2}
        pdftitle={order.pdftitle}
        pdfURL={order.pdfURL}
        onOrderSelect={onOrderSelect}
      />
    )
  }
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={pricingData}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({ item }) => getOrders(item)}
        keyExtractor={item => item.price}
      />
    </ScrollView>
  )
}
export default Pricing
