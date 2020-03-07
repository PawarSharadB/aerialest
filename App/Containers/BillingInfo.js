import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import I18n from '../I18n'
import Button from '../Components/Button'

import { TextField } from 'react-native-material-textfield'
import styles from './Styles/BillingInfoStyles'

const BillingInfo = props => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [company, setCompany] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')
  const [telephone, setTelephone] = useState('')
  const [fax, setFax] = useState('')

  const [inputError, setInputError] = useState('')
  let firstNameField = null
  let middleNameField = null
  let lastNameField = null
  let companyField = null
  let addressField = null
  let cityField = null
  let stateField = null
  let zipCodeField = null
  let countryField = null
  let telephoneField = null
  let faxField = null
  const onNext = () => {
    const { navigation } = props
    navigation.navigate('ChoosePayment')
  }
  return (
    <View style={styles.mainView}>
      <ScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps={'handled'}
      >
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
            label={I18n.t('middleName')}
            ref={ref => (middleNameField = ref)}
            value={middleName}
            onChangeText={middleName => {
              setInputError('')
              setMiddleName(middleName)
            }}
            error={middleName ? '' : inputError}
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
            value={state}
            onChangeText={state => {
              setInputError('')
              setState(state)
            }}
            error={state ? '' : inputError}
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
export default BillingInfo
