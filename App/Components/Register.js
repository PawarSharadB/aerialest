import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'react-native-material-textfield'
import I18n from '../I18n'

import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './Styles/RegisterStyles'

export const Register = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [inputError, setInputError] = useState('')
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
              setFirstName({ firstName })
            }}
            //error={inputError}
          />
          <TextField
            label={I18n.t('lastName')}
            value={lastName}
            onChangeText={lastName => {
              setInputError('')
              setLastName({ lastName })
            }}
            //error={inputError}
          />
          <TextField
            label={I18n.t('email')}
            value={email}
            onChangeText={email => {
              setInputError('')
              setEmail({ email })
            }}
            //error={inputError}
          />
          <TextField
            label={I18n.t('password')}
            value={password}
            onChangeText={password => {
              setInputError('')
              setPassword({ password })
            }}
            //error={inputError}
          />
          <TextField
            label={I18n.t('confirmPassword')}
            value={confirmPassword}
            onChangeText={confirmPassword => {
              setInputError('')
              setConfirmPassword({ confirmPassword })
            }}
            //error={inputError}
          />
        </View>
      </ScrollView>
    </View>
  )
}
export default Register
