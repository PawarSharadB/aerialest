import React from 'react'
import { View, Text } from 'react-native'
import CardView from 'react-native-cardview'
import { NavigationActions, StackActions } from 'react-navigation'
import Button from './Button'

const PaymentSummary = props => {
  const { order_id, message } = props.navigation.state.params.successData
  const goBackHome = () => {
    props.navigation.dispatch(StackActions.popToTop())

    const dispatcher = NavigationActions.navigate({
      routeName: 'Home',
      action: NavigationActions.navigate({
        routeName: 'HomeScreen'
      })
    })
    props.navigation.dispatch(dispatcher)
  }
  return (
    <CardView
      style={{
        padding: 10,
        marginTop: 16,
        backgroundColor: '#0485B2',
        marginHorizontal: 16,
        borderRadius: 5
      }}
    >
      <TextWithDesc title={'OrderId'} description={`${order_id}`} />
      <TextWithDesc title={'Status'} description={message} />
      <View style={{ marginTop: 20 }}>
        <Button
          textStyle={{
            color: '#fff',
            fontSize: 16
          }}
          text={'Home'}
          onPress={goBackHome}
        />
      </View>
    </CardView>
  )
}

export default PaymentSummary
const TextWithDesc = props => {
  const { title, description } = props
  return (
    <View
      style={{
        justifyContent: 'center'
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,

          color: '#fff'
        }}
      >
        {title}
      </Text>
      <Text style={{ fontSize: 15, marginLeft: 10, color: '#fff' }}>
        {description}
      </Text>
    </View>
  )
}
