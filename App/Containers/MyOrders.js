import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { UIActivityIndicator } from 'react-native-indicators'
import AlertCard from '../Components/AlertCard'
import { myOrdersRequest } from '../Sagas/MyOrders/Actions'
import OrdersCard from '../Components/OrdersCard'

const MyOrders = props => {
  const [responseError, setResponseError] = useState(null)

  const { isFetching, success, error, myOrder } = props
  const { orders } = myOrder
  useEffect(() => {
    if (error) {
      setResponseError(error)
      setTimeout(() => {
        setResponseError('')
      }, 3000)
    }
    if (success) {
      setResponseError('')
    }
  }, [success, error])
  useEffect(() => {
    const { orders } = props
    orders()
  }, [])
  const renderOrders = e => {
    return <OrdersCard items={e.item} />
  }
  return (
    <SafeAreaView style={styles.container}>
      {responseError ? <AlertCard message={responseError} /> : null}
      {isFetching && (
        <View>
          <UIActivityIndicator />
        </View>
      )}
      <FlatList
        data={orders}
        renderItem={renderOrders}
        keyExtractor={item => item.order_id.value}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({ myOrders }) => {
  const { isFetching, myOrder, success, error } = myOrders

  return {
    isFetching,
    myOrder,
    success,
    error
  }
}
const mapDispatchToProps = dispatch => ({
  orders: args => {
    dispatch(myOrdersRequest(args))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
})
