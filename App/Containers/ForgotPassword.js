import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { connect } from 'react-redux'
import { passwordRequest } from '../Sagas/password/Actions'
import { UIActivityIndicator } from 'react-native-indicators'

import Button from '../Components/Button'
import I18n from '../I18n'

import styles from './Styles/LoginStyles'

export const ForgotPassword = props => {
  const [email, setEmail] = useState('')
  const [inputError, setInputError] = useState('')
  const [responseError, setResponseError] = useState(null)

  const { passwordSuccess, passwordError, isFetching } = props
  useEffect(() => {
    if (passwordSuccess) {
      const { navigation } = props
      setResponseError('Password reset successfully.Please, check your mail')
      navigation.navigate('Login')
    }
    if (passwordError) {
      setResponseError(passwordError)
    }
  }, [passwordSuccess, passwordError, isFetching])

  const onSubmit = () => {
    const { passwordRequest } = props
    const mailData = {
      email,
      template: 'email_reset',
      websiteId: 1
    }
    if (email) {
      passwordRequest(mailData)
    } else {
      setInputError('Please enter the valid details')
    }
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.scrollView}>
        <TextField
          label={I18n.t('email')}
          value={email}
          onChangeText={email => {
            setInputError('')
            setEmail(email)
          }}
          error={email ? '' : inputError}
        />
        <Button
          text={I18n.t('Reset')}
          onPress={onSubmit}
          textStyle={styles.commonTextStyle}
          style={styles.commonButton}
          addShadow={true}
        />
        {responseError ? (
          <View style={{ marginTop: 20 }}>
            <Text style={styles.responseError}>{responseError}</Text>
          </View>
        ) : null}
        {isFetching && (
          <View style={{ marginTop: 20 }}>
            <UIActivityIndicator />
          </View>
        )}
      </View>
    </View>
  )
}
const mapStateToProps = ({ forgotPassword }) => {
  const {
    isFetching,
    passwordData,
    passwordSuccess,
    passwordError
  } = forgotPassword
  return {
    isFetching,
    passwordData,
    passwordSuccess,
    passwordError
  }
}
const mapDispatchToProps = dispatch => ({
  passwordRequest: args => {
    dispatch(passwordRequest(args))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
