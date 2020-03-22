import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { pricingData } from '../Assets/pricingData'
import { getPrices } from '../Sagas/Pricing/Actions'
import SingleOrder from '../Components/SingleOrder'
import styles from './Styles/PricingStyles'

const Pricing = props => {
  const { isLoading, success, error, updatedTime, getPrices, data } = props
  let [listData, setListData] = useState([])

  useState(() => {
    getPrices()
  }, [])

  useEffect(() => {
    if (success) {
      setListData(formatData(data))
    }
  }, [success, error])
  const formatData = data => {
    const keys = Object.keys(data)
    const dataFormatter = keys.map((value, index) => {
      return data[value]
    })
    return dataFormatter
  }
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
    const {
      lable: title,
      row2: price,
      row13: pdftitle,
      row14: pdfURL,
      row1: sub1,
      row3: sub2,
      row4: sub3,
      row5: sub4
    } = order
    return (
      <SingleOrder
        id={price}
        title={title}
        price={price}
        sub1={sub1}
        sub2={sub2}
        sub3={sub3}
        sub4={sub4}
        sub5={sub2}
        pdftitle={pdftitle}
        pdfURL={pdfURL}
        onOrderSelect={onOrderSelect}
      />
    )
  }
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={listData}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({ item }) => getOrders(item)}
        keyExtractor={item => item.price}
      />
    </ScrollView>
  )
}
const mapStateToProps = ({ pricing }) => {
  const { isLoading, success, error, updatedTime, data } = pricing
  return {
    isLoading,
    success,
    error,
    updatedTime,
    data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getPrices: () => {
      dispatch(getPrices())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pricing)
