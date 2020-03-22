import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { myOrdersRequest } from '../Sagas/MyOrders/Actions'
import OrdersCard from '../Components/OrdersCard'

const MyOrders = props => {
  const [responseError, setResponseError] = useState(null)

  const { success, error, myOrder } = props
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
  return (
    <ScrollView>
      <OrdersCard />
    </ScrollView>
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
