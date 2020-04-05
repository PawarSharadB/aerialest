import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { TextField } from 'react-native-material-textfield'
import I18n from '../I18n'
import Button from '../Components/Button'
import AlertCard from '../Components/AlertCard'
import { UIActivityIndicator, MaterialIndicator } from 'react-native-indicators'
import { checkPatternWithExpressionAndString } from '../Utils/validateBillingDetails'
import {
  getBillingInfoDropDown,
  billingInfoDataRequest
} from '../Sagas/BillingInfo/Actions'
import { Dropdown } from 'react-native-material-dropdown'
import styles from './Styles/BillingInfoStyles'

const BillingInfoSlideMenu = (props) => {
  const { isLoadingGetData, errorGetData } = props
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [company, setCompany] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [regions, setRegions] = useState([])
  const [region, setRegion] = useState('')
  const [region_id, setRegionId] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')
  const [telephone, setTelephone] = useState('')
  const [fax, setFax] = useState('')
  const [responseError, setResponseError] = useState(null)
  const [inputError, setInputError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const {
    navigation: { state },
    getDropDownData,
    getBillingInfoData,
    dropDownData,
    successData
  } = props
  let firstNameField,
    lastNameField,
    companyField,
    addressField,
    cityField,
    stateField,
    zipCodeField,
    telephoneField,
    countryRef,
    faxField = null
  const onNext = () => {
    const isValidString = checkPatternWithExpressionAndString(/^[A-Za-z0-9]+/, {
      firstName,
      lastName,
      street,
      city,
      zipCode,
      country,
      telephone,
      region_id: regions.length > 0 ? region_id : 'Dummy',
      region: regions.length > 0 ? 'Dummy' : region,
      company
    })
    const billingInfo = {
      firstname: firstName,
      lastname: lastName,
      street: [street],
      city,
      country_id: country,
      postcode: zipCode,
      telephone,
      region: regions.length > 0 ? '' : region,
      region_id: regions.length > 0 ? region_id : '',
      company
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
    getDropDownData()
    getBillingInfoData()
  }, [])
  useEffect(() => {
    if (successData) {
      const regionMain = props.getData.region
      const { region, region_id } = regionMain
        ? regionMain
        : { region: '', region_id: '' }
      const { street } = props.getData
      const streetUpdated = street ? street[0] : ''
      const {
        firstname,
        lastname,
        postcode,
        telephone,
        country_id,
        company,
        city
      } = props.getData
      setFirstName(firstname)
      setLastName(lastname)
      setRegion(region)
      setRegionId(region_id)
      setZipCode(postcode)
      setTelephone(telephone)
      setStreet(streetUpdated)
      setCountry(country_id)
      setCompany(company)
      setCity(city)
      zipCodeField.setValue(postcode)
      telephoneField.setValue(telephone), firstNameField.setValue(firstname)
      lastNameField.setValue(lastname)
      companyField.setValue(company)
      addressField.setValue(streetUpdated)
      cityField.setValue(city)
      stateField.setValue(region)
    }
    if (errorGetData) {
      console.log(error)
    }
  }, [isLoadingGetData, errorGetData])
  const parseDropDownData = () => {
    const mappedArray = dropDownData.map((obj) => ({
      value: obj.full_name_english
    }))
    return mappedArray
  }
  const parseStatesData = () => {
    const mappedArray = regions.map((obj) => ({ value: obj.name }))
    return mappedArray
  }
  return (
    <View style={styles.mainView}>
      {successData && (
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
              editable={false}
              label={I18n.t('firstName')}
              ref={(ref) => (firstNameField = ref)}
              value={firstName}
              onChangeText={(firstName) => {
                setInputError('')
                setFirstName(firstName)
              }}
              error={firstName ? '' : inputError}
            />
            <TextField
              editable={false}
              label={I18n.t('lastName')}
              ref={(ref) => (lastNameField = ref)}
              value={lastName}
              onChangeText={(lastName) => {
                setInputError('')
                setLastName(lastName)
              }}
              error={lastName ? '' : inputError}
            />
            <TextField
              editable={false}
              label={I18n.t('company')}
              ref={(ref) => (companyField = ref)}
              value={company}
              onChangeText={(company) => {
                setInputError('')
                setCompany(company)
              }}
              error={company ? '' : inputError}
            />
            <TextField
              editable={false}
              label={I18n.t('address')}
              ref={(ref) => (addressField = ref)}
              value={street}
              onChangeText={(street) => {
                setInputError('')
                setStreet(street)
              }}
              error={street ? '' : inputError}
            />
            <TextField
              editable={false}
              label={I18n.t('city')}
              ref={(ref) => (cityField = ref)}
              value={city}
              onChangeText={(city) => {
                setInputError('')
                setCity(city)
              }}
              error={city ? '' : inputError}
            />
            <Dropdown
              ref={(ref) => (countryRef = ref)}
              pickerStyle={{ height: 500 }}
              label={'Select Country'}
              data={parseDropDownData()}
              value={country}
              onChangeText={(value, index) => {
                setInputError('')
                setRegion('')
                setRegions([])
                const { id, available_regions } = dropDownData[index]
                setCountry(id)
                let region = available_regions ? available_regions : []
                setRegions(region)
              }}
            />
            {regions.length > 0 ? (
              <Dropdown
                error={inputError}
                label="State"
                data={parseStatesData()}
                onChangeText={(value, index) => {
                  const { id } = regions[index]
                  setRegionId(id)
                  setInputError('')
                }}
              />
            ) : (
              <TextField
                editable={false}
                label={I18n.t('state')}
                ref={(ref) => (stateField = ref)}
                value={region}
                onChangeText={(addState) => {
                  setInputError('')
                  setRegion(addState)
                }}
                error={region ? '' : inputError}
              />
            )}
            <TextField
              editable={false}
              label={I18n.t('zipCode')}
              ref={(ref) => (zipCodeField = ref)}
              value={zipCode}
              onChangeText={(zipCode) => {
                setInputError('')
                setZipCode(zipCode)
              }}
              error={zipCode ? '' : inputError}
            />
            <TextField
              editable={false}
              label={I18n.t('telephone')}
              ref={(ref) => (telephoneField = ref)}
              value={telephone}
              onChangeText={(telephone) => {
                setInputError('')
                setTelephone(telephone)
              }}
              error={telephone ? '' : inputError}
            />
            <TextField
              editable={false}
              label={I18n.t('fax')}
              ref={(ref) => (faxField = ref)}
              value={fax}
              onChangeText={(fax) => {
                setInputError('')
                setFax(fax)
              }}
              error={fax ? '' : inputError}
            />
            {/* <View style={styles.buttonsContainer}>
                <Button
                  disabled={true}
                  text={I18n.t('next')}
                  onPress={onNext}
                  textStyle={styles.commonTextStyle}
                  style={styles.commonButton}
                  addShadow={true}
                />
              </View> */}
          </View>
        </ScrollView>
      )}
      {isLoadingGetData && (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <MaterialIndicator animating={true} size={50} color={'#0485B2'} />
        </View>
      )}
    </View>
  )
}

const mapStateToProps = ({ billingInfo }) => {
  const {
    data: dropDownData,
    isLoadingGetData,
    errorGetData,
    getData,
    successData
  } = billingInfo
  return {
    dropDownData,
    isLoadingGetData,
    errorGetData,
    getData,
    successData
  }
}
const mapDispatchToProps = (dispatch) => ({
  getDropDownData: () => {
    dispatch(getBillingInfoDropDown())
  },
  getBillingInfoData: () => {
    dispatch(billingInfoDataRequest())
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingInfoSlideMenu)
