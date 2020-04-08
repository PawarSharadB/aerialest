import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, StyleSheet, BackHandler } from 'react-native'
import { placeOrderRequest, resetOrder } from '../Sagas/order/Actions'
import Images from '../Images'

const SuccessScreen = props => {
  const { response, orderData } = props.navigation.state.params
  const navigateToHome = () => props.navigation.navigate('Home')
  const { success, error, successData, resetOrder } = props
  useEffect(() => {
    if (success) {
      const { navigation } = props
      navigation.navigate('PaymentSummary', { successData })
    }
    if (error) {
      console.log(error)
    }
  }, [success, error])
  useEffect(() => {
    navigateToPaymentDetails()
    const backhandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        resetOrder()
        navigateToHome()
      }
    )
    return () => {
      resetOrder()
      backhandler.remove()
    }
  }, [])
  const navigateToPaymentDetails = async () => {
    const dataObj = {
      isGuest: orderData.email === '' ? 0 : 1,
      price: orderData.price,
      billingAddress: orderData.billingAddress,
      itemOptions: [
        orderData.itemOptions,
        orderData.geoAddress,
        orderData.latitude,
        orderData.longitude
      ],
      paymentMethod: response.data.payer.payment_method,
      paymentDetails: {
        payer: response.data.payer,
        transactions: response.data.transactions
      }
    }
    const { placeOrderRequest } = props
    placeOrderRequest(dataObj)
  }
  return (
    <View style={styleSheet.mainView}>
      <Image source={Images.paypalSuccess} style={styleSheet.image} />
      <Text style={styleSheet.successText}>
        Payment Success ,Please wait...
      </Text>
    </View>
  )
}
const mapStateToProps = ({ order }) => {
  const { isFetching, successData, success, error } = order

  return {
    isFetching,
    successData,
    success,
    error
  }
}
const mapDispatchToProps = dispatch => ({
  placeOrderRequest: orderData => {
    dispatch(placeOrderRequest(orderData))
  },
  resetOrder: () => dispatch(resetOrder())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuccessScreen)

const styleSheet = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'stretch'
  },
  successText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
    color: '#00457C'
  }
})
