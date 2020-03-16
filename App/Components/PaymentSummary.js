import React, { useEffect } from 'react'
import { View, Text, BackHandler } from 'react-native'
import CardView from 'react-native-cardview'
import { StackActions, NavigationActions } from 'react-navigation'

const PaymentSummary = props => {
  const { navigation } = props
  const goBack = () => {
    navigation.dispatch(StackActions.popToTop())
  }
  useEffect(() => {
    const backListner = BackHandler.addEventListener(
      'hardwareBackPress',
      goBack
    )
    setTimeout(() => goBack(), 5000)
    return () => {
      BackHandler.removeEventListener(backListner)
    }
  }, [])
  const { order_id, message } = props.navigation.state.params.successData
  return (
    <CardView>
      <TextWithDesc title={'OrderId'} description={`${order_id}`} />
      <TextWithDesc title={'Status'} description={message} />
    </CardView>
  )
}

export default PaymentSummary
const TextWithDesc = props => {
  const { title, description } = props
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{title}</Text>
      <Text style={{ fontSize: 15, marginLeft: 10 }}>{description}</Text>
    </View>
  )
}
