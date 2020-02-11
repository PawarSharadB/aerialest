import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { connect } from 'react-redux'
import { checkPatternWithExpressionAndString } from '../Utils/regexHandlerLogin'
import { loginRequest } from '../Sagas/login/Actions'

import Button from '../Components/Button'
import I18n from '../I18n'

import styles from './Styles/LoginStyles'

export const Login = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputError, setInputError] = useState('')
  const onSubmit = () => {
    const { navigation, loginRequest } = props
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
      console.log(loginData)
      //navigation.navigate('ChooseGameMode')
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
          addShadow={true}
          showSmallText={true}
        />
      </ScrollView>
    </View>
  )
}

const mapDispatchToProps = dispatch => ({
  loginRequest: args => {
    dispatch(loginRequest(args))
  }
})

export default connect(null, mapDispatchToProps)(Login)
