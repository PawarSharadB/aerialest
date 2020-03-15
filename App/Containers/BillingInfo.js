import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import I18n from '../I18n'
import Button from '../Components/Button'
import AlertCard from '../Components/AlertCard'
import { UIActivityIndicator } from 'react-native-indicators'
import { profileRequest } from '../Sagas/profile/Actions'

import { TextField } from 'react-native-material-textfield'
import { checkPatternWithExpressionAndString } from '../Utils/validateBillingDetails'

import styles from './Styles/BillingInfoStyles'
const BillingInfo = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [addState, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')
  const [telephone, setTelephone] = useState('')
  const [fax, setFax] = useState('')
  const [responseError, setResponseError] = useState(null)
  const [inputError, setInputError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const {
    navigation: { state }
  } = props
  const { success, error, profile } = props
  const onNext = () => {
    const { itemOptions, latitude, longitude } = state.params
    const price = state.params.itemOptions.price
    const isValidString = checkPatternWithExpressionAndString(/^[A-Za-z0-9]+/, {
      firstName,
      lastName,
      email,
      street,
      city,
      addState,
      zipCode,
      country,
      telephone
    })
    const orderData = {
      email: profile.email ? profile.email : email,
      price,
      itemOptions: [itemOptions, latitude, longitude],
      billingAddress: {
        firstname: firstName,
        lastname: lastName,
        street: [street],
        city,
        country_id: country,
        postcode: zipCode,
        telephone
      },
      currency: 'USD'
    }
    if (isValidString) {
      const { navigation } = props
      navigation.navigate('ChoosePayment', {
        orderData
      })
    } else {
      setInputError('Please fill all the fields')
    }
  }

  useEffect(() => {
    setIsLoading(false)
    const { getProfile } = props
    getProfile()
  }, [])
  useEffect(() => {
    if (error) {
      setResponseError(error)
      setTimeout(() => {
        setResponseError('')
      }, 3000)
    }
    if (success) {
      setFirstName(profile.firstname)
      setLastName(profile.lastname)
      setEmail(profile.email)
      if (profile.addresses.length !== 0) {
        getToken()
      }
    }
  }, [success, error])
  const getToken = async () => {
    const tokeExits = await AsyncStorage.getItem('token')
    setResponseError('')

    if (tokeExits) {
      const { navigation } = props
      const { itemOptions, latitude, longitude } = state.params
      const price = state.params.itemOptions.price
      const orderData = {
        email: profile.email ? profile.email : '',
        price,
        itemOptions: [itemOptions, latitude, longitude],
        billingAddress: profile.addresses,
        currency: 'USD'
      }
      navigation.navigate('ChoosePayment', {
        orderData
      })
    }
  }
  return (
    <View style={styles.mainView}>
      <ScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps={'handled'}
      >
        {responseError ? <AlertCard message={responseError} /> : null}
        <View style={styles.contentScrollView}>
          {isLoading && (
            <View style={{}}>
              <UIActivityIndicator />
            </View>
          )}
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
            label={I18n.t('email')}
            ref={ref => (emailField = ref)}
            value={email}
            onChangeText={email => {
              setInputError('')
              setEmail(email)
            }}
            error={email ? '' : inputError}
          />
          <TextField
            label={I18n.t('company')}
            ref={ref => (companyField = ref)}
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
            value={street}
            onChangeText={street => {
              setInputError('')
              setStreet(street)
            }}
            error={street ? '' : inputError}
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
            ref={ref => (faxField = ref)}
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

const mapStateToProps = ({ profileInfo }) => {
  const { isFetching, profile, success, error } = profileInfo

  return {
    isFetching,
    profile,
    success,
    error
  }
}
const mapDispatchToProps = dispatch => ({
  getProfile: () => {
    dispatch(profileRequest())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(BillingInfo)
