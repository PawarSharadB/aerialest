import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Loader } from 'react-native'
import { connect } from 'react-redux'
import SelectionWithText from '../Components/SelectionWithText'
import OrderWithTrailReport from '../Components/Orders/MainComponents/OrderWithTrailReport'
import OrderWithoutTrailReport from '../Components/Orders/MainComponents/OrderWithoutTrailReport'
import { getPricesRequest } from '../Sagas/PlaceOrder/Actions'
import { UIActivityIndicator } from 'react-native-indicators'

const PlaceOrder = props => {
  const { isLoading, data } = props
  const [isTrailReport, toggleTrailReport] = useState(false)
  const {
    navigation: { state }
  } = props
  const latitude = state.params.region.latitude
  const longitude = state.params.region.longitude
  useEffect(() => {
    const { getPricesData } = props
    getPricesData()
  }, [])
  const placeOrder = e => {
    console.log('resident', e)
    const itemOptions = e
    const { navigation } = props
    navigation.navigate('BillingInfo', { itemOptions, latitude, longitude })
  }

  return (
    <ScrollView style={{ padding: 10, flex: 1 }}>
      {isLoading && (
        <View>
          <UIActivityIndicator />
        </View>
      )}
      {!isLoading && (
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Latitude: </Text>
            <Text>{latitude}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
              Longitude:{' '}
            </Text>
            <Text>{longitude}</Text>
          </View>
          <SelectionWithText
            isSelected={isTrailReport}
            type="square"
            onSelect={() => toggleTrailReport(prevResult => !prevResult)}
            title={'Trial Report'}
          />
          {isTrailReport && (
            <OrderWithTrailReport onPress={placeOrder} data={data} />
          )}
          {!isTrailReport && (
            <OrderWithoutTrailReport onPress={placeOrder} data={data} />
          )}
          {isLoading && (
            <View>
              <UIActivityIndicator />
            </View>
          )}
        </View>
      )}
    </ScrollView>
  )
}
const mapStateToProps = ({ placeOrder }) => {
  const { isLoading, error, data } = placeOrder
  return { isLoading, error, data }
}
const mapDispatchToProps = dispatch => ({
  getPricesData: () => {
    dispatch(getPricesRequest())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder)
