import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { connect } from 'react-redux'
import { checkPatternWithExpressionAndString } from '../Utils/regexHandlerLogin'
import { loginRequest } from '../Sagas/login/Actions'
import { UIActivityIndicator } from 'react-native-indicators'

import Button from '../Components/Button'
import I18n from '../I18n'

import styles from './Styles/LoginStyles'

export const Login = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputError, setInputError] = useState('')
  const [responseError, setResponseError] = useState(null)
  const { success, error, isFetching } = props

  useEffect(() => {
    if (success) {
      const { navigation } = props
      setResponseError(error)
      navigation.navigate('Auth')
    }
    if (error) {
      setResponseError(error)
    }
  }, [success, error])
  const onSubmit = () => {
    const { loginRequest } = props
    const isValidString = checkPatternWithExpressionAndString(/^[A-Za-z0-9]+/, {
      email,
      password
    })
    const loginData = {
      username: email,
      password
    }
    if (isValidString) {
      loginRequest(loginData)
    } else {
      setInputError('Please enter the valid details')
    }
  }
  const onForgotPassword = () => {}
  return (
    <View style={styles.mainView}>
      <ScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps={'handled'}
      >
        <TextField
          label={I18n.t('email')}
          value={email}
          onChangeText={email => {
            setInputError('')
            setEmail(email)
          }}
          error={email ? '' : inputError}
        />
        <TextField
          label={I18n.t('password')}
          value={password}
          secureTextEntry={true}
          onChangeText={password => {
            setInputError('')
            setPassword(password)
          }}
          error={password ? '' : inputError}
        />
        <Button
          text={I18n.t('signIn')}
          onPress={onSubmit}
          textStyle={styles.commonTextStyle}
          style={styles.commonButton}
          addShadow={true}
        />
        <Button
          text={I18n.t('forgotPassword')}
          onPress={onForgotPassword}
          textStyle={styles.forgotPasswordText}
          style={styles.forgotPassword}
          addShadow={false}
          showSmallText={true}
        />
        {responseError ? (
          <View>
            <Text style={styles.responseError}>{responseError}</Text>
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
const mapStateToProps = ({ login }) => {
  const { isFetching, loginData, success, error } = login
  return {
    isFetching,
    loginData,
    success,
    error
  }
}
const mapDispatchToProps = dispatch => ({
  loginRequest: args => {
    dispatch(loginRequest(args))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
