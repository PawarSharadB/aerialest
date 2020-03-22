import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { myOrdersRequest } from '../Sagas/MyOrders/Actions'
import OrdersCard from '../Components/OrdersCard'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
  }
]

const MyOrders = props => {
  const [responseError, setResponseError] = useState(null)

  const { success, error, myOrder } = props
  const { orders } = myOrder
  useEffect(() => {
    if (error) {
      console.log('err', error)
      setResponseError(error)
      setTimeout(() => {
        setResponseError('')
      }, 3000)
    }
    if (success) {
      console.log('myorder', myOrder)
    }
  }, [success, error])
  useEffect(() => {
    const { orders } = props
    orders()
  }, [])
  const renderOrders = e => {
    console.log(e.item)
    return <OrdersCard items={e.item} />
  }
  return (
    <SafeAreaView style={styles.container}>
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
    marginTop: 10
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
