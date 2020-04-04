import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Loader } from 'react-native'
import { connect } from 'react-redux'
import SelectionWithText from '../Components/SelectionWithText'
import OrderWithTrailReport from '../Components/Orders/MainComponents/OrderWithTrailReport'
import OrderWithoutTrailReport from '../Components/Orders/MainComponents/OrderWithoutTrailReport'
import { getPricesRequest } from '../Sagas/PlaceOrder/Actions'
import { UIActivityIndicator } from 'react-native-indicators'
import { profileRequest, clearProfile } from '../Sagas/profile/Actions'
const PlaceOrder = (props) => {
  const {
    isLoading,
    data,
    profile,
    isFetchingProfile,
    success,
    errorProfile
  } = props
  const [isTrailReport, toggleTrailReport] = useState(false)
  const {
    navigation: { state }
  } = props
  const [isGoToOrderScreen, setIsGoToOrderScreen] = useState(null)
  const latitude = state.params.region.latitude
  const longitude = state.params.region.longitude
  const geoAddress = state.params.address
  useEffect(() => {
    const { getPricesData, getProfile, clearProfile } = props
    getPricesData()
    getProfile()
    return () => {
      clearProfile()
    }
  }, [])
  useEffect(() => {
    if (errorProfile) {
      setIsGoToOrderScreen(false)
    }
    if (success) {
      setIsGoToOrderScreen(
        profile.addresses ? profile.addresses.length > 0 : false
      )
    }
  }, [success, errorProfile])
  const placeOrder = (e) => {
    const itemOptions = e
    const { navigation } = props
    // Form Data object
    if (isGoToOrderScreen !== null) {
      if (isGoToOrderScreen) {
        const billingAddress = profile.addresses[0]
        const {
          firstname,
          lastname,
          street,
          city,
          country_id,
          postcode,
          telephone,
          region_id
        } = billingAddress
        const email = profile.email ? profile.email : ''
        const orderData = {
          price: itemOptions.price,
          itemOptions: [itemOptions, `${latitude}`, `${longitude}`],
          geoAddress,
          billingAddress: {
            email,
            firstname,
            lastname,
            street,
            city,
            country_id,
            postcode,
            telephone,
            region_id
          },
          currency: 'USD'
        }
        navigation.push('ChoosePayment', {
          orderData
        })
      } else {
        navigation.push('BillingInfo', {
          itemOptions,
          geoAddress,
          latitude: `${latitude}`,
          longitude: `${longitude}`
        })
      }
    }
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
            onSelect={() => toggleTrailReport((prevResult) => !prevResult)}
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
const mapStateToProps = ({ placeOrder, profileInfo }) => {
  const { isLoading, error, data } = placeOrder
  const {
    isFetching: isFetchingProfile,
    profile,
    success,
    error: errorProfile
  } = profileInfo
  return {
    isLoading,
    error,
    data,
    isFetchingProfile,
    profile,
    success,
    errorProfile
  }
}
const mapDispatchToProps = (dispatch) => ({
  getProfile: () => {
    dispatch(profileRequest())
  },
  getPricesData: () => {
    dispatch(getPricesRequest())
  },
  clearProfile: () => {
    dispatch(clearProfile())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder)
