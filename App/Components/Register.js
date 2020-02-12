import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UIActivityIndicator } from 'react-native-indicators'

import { TextField } from 'react-native-material-textfield'
import Button from './Button'
import I18n from '../I18n'

import { View, ScrollView, Alert, Text } from 'react-native'
import { checkPatternWithExpressionAndString } from '../Utils/regexHandler'
import { saveUserDataRequest, clearData } from '../Sagas/register/Actions'

import styles from './Styles/RegisterStyles'

export const Register = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [inputError, setInputError] = useState('')
  const [responseError, setResponseError] = useState(null)
  const { isFetching, success, error } = props
  let firstNameField = null
  let lastNameField = null
  let emaiField = null
  let passwordField = null
  let confirmPasswordField = null

  useEffect(() => {
    if (error) {
      setResponseError(error)
    }
    if (success) {
      const { navigation } = props
      setResponseError(error)
      navigation.navigate('Sign In')
    }
  }, [success, error])
  useEffect(() => {
    return () => {
      const { clearData } = props
      clearData()
    }
  }, [])
  const onRegister = () => {
    const { saveUserDataRequest } = props
    const isValidString = checkPatternWithExpressionAndString(/^[A-Za-z0-9]+/, {
      firstName,
      lastName,
      email,
      password
    })
    const userDataRequest = {
      customer: {
        email,
        firstname: firstName,
        lastname: lastName
      },
      password
    }
    if (isValidString && password === confirmPassword) {
      saveUserDataRequest(userDataRequest)
    } else {
      setInputError('Please fill all the fields')
    }
  }
  const onCancel = () => {
    setFirstName('')
    setLastName('')
    setEmail(''), setPassword('')
    setConfirmPassword('')
    firstNameField.clear()
    lastNameField.clear()
    emaiField.clear()
    passwordField.clear()
    confirmPasswordField.clear()
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
            ref={ref => (emaiField = ref)}
            value={email}
            onChangeText={email => {
              setInputError('')
              setEmail(email)
            }}
            error={email ? '' : inputError}
          />
          <TextField
            secureTextEntry={true}
            label={I18n.t('password')}
            ref={ref => (passwordField = ref)}
            value={password}
            onChangeText={password => {
              setInputError('')
              setPassword(password)
            }}
            error={password ? '' : inputError}
          />
          <TextField
            secureTextEntry={true}
            label={I18n.t('confirmPassword')}
            ref={ref => (confirmPasswordField = ref)}
            value={confirmPassword}
            onChangeText={confirmPassword => {
              setInputError('')
              setConfirmPassword(confirmPassword)
            }}
            error={confirmPassword ? '' : inputError}
          />
          <View style={styles.buttonsContainer}>
            <Button
              text={I18n.t('cancel')}
              onPress={onCancel}
              textStyle={styles.commonTextStyle}
              style={[styles.commonButton, styles.cancelBtn]}
              addShadow={true}
            />
            <Button
              text={I18n.t('register')}
              onPress={onRegister}
              textStyle={styles.commonTextStyle}
              style={styles.commonButton}
              addShadow={true}
            />
          </View>
        </View>
        {responseError ? (
          <View>
            <Text style={{ color: 'red' }}>{responseError}</Text>
          </View>
        ) : null}
        {isFetching && (
          <View>
            <UIActivityIndicator />
          </View>
        )}
      </ScrollView>
    </View>
  )
}
const mapStateToProps = ({ register }) => {
  const { isFetching, userData, error, success } = register
  return {
    isFetching,
    userData,
    error,
    success
  }
}
const mapDispatchToProps = dispatch => ({
  saveUserDataRequest: args => {
    dispatch(saveUserDataRequest(args))
  },
  clearData: () => {
    dispatch(clearData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
