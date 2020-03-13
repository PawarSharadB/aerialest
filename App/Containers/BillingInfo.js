import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

import I18n from '../I18n'
import Button from '../Components/Button'
import AlertCard from '../Components/AlertCard'
import { UIActivityIndicator } from 'react-native-indicators'
import { profileRequest } from '../Sagas/profile/Actions'
import { placeOrderRequest } from '../Sagas/order/Actions'

import { TextField } from 'react-native-material-textfield'
import { checkPatternWithExpressionAndString } from '../Utils/validateBillingDetails'

import styles from './Styles/BillingInfoStyles'

const BillingInfo = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [company, setCompany] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [addState, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')
  const [telephone, setTelephone] = useState('')
  const [fax, setFax] = useState('')
  const [responseError, setResponseError] = useState(null)
  const [inputError, setInputError] = useState('')
  const {
    navigation: { state }
  } = props
  const { success, error, profile, orderError, orderSuccess, orderData } = props
  const onNext = () => {
    const { placeOrderRequest } = props
    const { itemOptions, latitude, longitude } = state.params
    const price = state.params.itemOptions.price
    const addressFrom = `${address},${city},${addState},${zipCode},${country}`

    const isValidString = checkPatternWithExpressionAndString(/^[A-Za-z0-9]+/, {
      firstName,
      lastName,
      address,
      city,
      addState,
      zipCode,
      country,
      telephone
    })
    const orderData = {
      email: profile.email ? email : '',
      price,
      itemOptions: [itemOptions, addressFrom, latitude, longitude],
      currency: 'USD'
    }
    if (isValidString) {
      placeOrderRequest(orderData)
    } else {
      setInputError('Please fill all the fields')
    }
  }
  useEffect(async () => {
    const { getProfile, placeOrderRequest } = props
    const token = await AsyncStorage.getItem('token')
    setResponseError('')
    getProfile()
    if (token) {
      const { itemOptions, latitude, longitude } = state.params
      const price = state.params.itemOptions.price
      const addressFrom = profile.address ? profile.address : ''
      const orderData = {
        email: profile.email ? profile.email : '',
        price,
        itemOptions: [itemOptions, addressFrom, latitude, longitude],
        currency: 'USD'
      }
      placeOrderRequest(orderData)
    }
  }, [])
  useEffect(() => {
    if (orderSuccess) {
      const { navigation } = props
      setResponseError('Order successfull')
      setTimeout(() => {
        navigation.navigate('ChoosePayment')
      }, 500)
    }
    if (orderError) {
      setResponseError(error)
      setTimeout(() => {
        setResponseError('')
      }, 3000)
    }
  }, [orderSuccess, orderError])
  useEffect(() => {
    if (error) {
      setResponseError(error)
      setTimeout(() => {
        setResponseError('')
      }, 3000)
    }
    if (success) {
    }
  }, [success, error])
  return (
    <View style={styles.mainView}>
      <ScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps={'handled'}
      >
        {responseError ? <AlertCard message={responseError} /> : null}
        <View style={styles.contentScrollView}>
          <TextField
            label={I18n.t('firstName')}
            ref={ref => (firstNameField = ref)}
            value={firstName}
            onChangeText={firstName => {
              setInputError('')
              setFirstName(firstName)
            }}
            error={firstName ? '' : inputError}
          />
          <TextField
            label={I18n.t('lastName')}
            ref={ref => (lastNameField = ref)}
            value={lastName}
            onChangeText={lastName => {
              setInputError('')
              setLastName(lastName)
            }}
            error={lastName ? '' : inputError}
          />
          <TextField
            label={I18n.t('company')}
            value={company}
            onChangeText={company => {
              setInputError('')
              setCompany(company)
            }}
            error={company ? '' : inputError}
          />
          <TextField
            label={I18n.t('address')}
            ref={ref => (addressField = ref)}
            value={address}
            onChangeText={address => {
              setInputError('')
              setAddress(address)
            }}
            error={address ? '' : inputError}
          />
          <TextField
            label={I18n.t('city')}
            ref={ref => (cityField = ref)}
            value={city}
            onChangeText={city => {
              setInputError('')
              setCity(city)
            }}
            error={city ? '' : inputError}
          />
          <TextField
            label={I18n.t('state')}
            ref={ref => (stateField = ref)}
            value={addState}
            onChangeText={addState => {
              setInputError('')
              setState(addState)
            }}
            error={addState ? '' : inputError}
          />
          <TextField
            label={I18n.t('zipCode')}
            ref={ref => (zipCodeField = ref)}
            value={zipCode}
            onChangeText={zipCode => {
              setInputError('')
              setZipCode(zipCode)
            }}
            error={zipCode ? '' : inputError}
          />
          <TextField
            label={I18n.t('country')}
            ref={ref => (countryField = ref)}
            value={country}
            onChangeText={country => {
              setInputError('')
              setCountry(country)
            }}
            error={country ? '' : inputError}
          />
          <TextField
            label={I18n.t('telephone')}
            ref={ref => (telephoneField = ref)}
            value={telephone}
            onChangeText={telephone => {
              setInputError('')
              setTelephone(telephone)
            }}
            error={telephone ? '' : inputError}
          />
          <TextField
            label={I18n.t('fax')}
            value={fax}
            onChangeText={fax => {
              setInputError('')
              setFax(fax)
            }}
            error={fax ? '' : inputError}
          />
          <View style={styles.buttonsContainer}>
            <Button
              text={I18n.t('next')}
              onPress={onNext}
              textStyle={styles.commonTextStyle}
              style={styles.commonButton}
              addShadow={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = ({ profileInfo, order }) => {
  const { isFetching, profile, success, error } = profileInfo
  const { isPlacingOrder, orderData, orderSuccess, orderError } = order

  return {
    isFetching,
    profile,
    success,
    error,
    isPlacingOrder,
    orderData,
    orderSuccess,
    orderError
  }
}
const mapDispatchToProps = dispatch => ({
  getProfile: () => {
    dispatch(profileRequest())
  },
  placeOrderRequest: args => {
    dispatch(placeOrderRequest(args))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(BillingInfo)
