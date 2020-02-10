import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { TextField } from 'react-native-material-textfield'
import Button from './Button'
import I18n from '../I18n'

import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { checkPatternWithExpressionAndString } from '../Utils/regexHandler'
import { saveUserDataSuccess } from '../Sagas/register/Actions'

import styles from './Styles/RegisterStyles'

export const Register = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [inputError, setInputError] = useState('')
  const onRegister = () => {
    const { navigation, saveUserDataSuccess } = props
    const isValidString = checkPatternWithExpressionAndString(/^[A-Za-z0-9]+/, {
      firstName,
      lastName,
      email,
      password
    })
    const userData = {
      customer: {
        email,
        firstName,
        lastName
      },
      password
    }
    if (isValidString && password === confirmPassword) {
      saveUserDataSuccess(userData)
      console.log(userData)
      onCancel()
      //navigation.navigate('ChooseGameMode')
    } else {
      setInputError('Please fill all the fields')
    }
  }
  const onCancel = () => {
    setFirstName(''),
      setLastName(''),
      setEmail(''),
      setPassword(''),
      setConfirmPassword('')
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
            value={firstName}
            onChangeText={firstName => {
              setInputError('')
              setFirstName(firstName)
            }}
            //error={inputError}
          />
          <TextField
            label={I18n.t('lastName')}
            value={lastName}
            onChangeText={lastName => {
              setInputError('')
              setLastName(lastName)
            }}
            error={inputError}
          />
          <TextField
            label={I18n.t('email')}
            value={email}
            onChangeText={email => {
              setInputError('')
              setEmail(email)
            }}
            error={inputError}
          />
          <TextField
            secureTextEntry={true}
            label={I18n.t('password')}
            value={password}
            onChangeText={password => {
              setInputError('')
              setPassword(password)
            }}
            error={inputError}
          />
          <TextField
            secureTextEntry={true}
            label={I18n.t('confirmPassword')}
            value={confirmPassword}
            onChangeText={confirmPassword => {
              setInputError('')
              setConfirmPassword(confirmPassword)
            }}
            error={inputError}
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
      </ScrollView>
    </View>
  )
}
const mapDispatchToProps = dispatch => ({
  saveUserDataSuccess: args => {
    dispatch(saveUserDataSuccess(args))
  }
})

export default connect(null, mapDispatchToProps)(Register)
