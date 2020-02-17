import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import Button from '../Components/Button'
import AlertCard from '../Components/AlertCard'
import { UIActivityIndicator } from 'react-native-indicators'
import { TextField } from 'react-native-material-textfield'
import I18n from '../I18n'
import { checkPatternWithExpressionAndString } from '../Utils/validateUpdateProfile'

import { profileRequest, profileUpdateRequest } from '../Sagas/profile/Actions'
import { styles } from './Styles/ProfileStyles'

const Profile = props => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [inputError, setInputError] = useState('')
  const [responseError, setResponseError] = useState(null)
  const {
    success,
    error,
    profile,
    isFetching,
    isUpdateFetching,
    updateSuccess,
    updateError
  } = props

  let firstNameField = null
  let lastNameField = null
  let emaiField = null

  useEffect(() => {
    if (updateError) {
      setResponseError(error)
      setTimeout(() => {
        setResponseError('')
      }, 3000)
    }
    if (updateSuccess) {
      const { navigation } = props
      setResponseError(I18n.t('updateMsg'))
      setTimeout(() => {
        setResponseError('')
      }, 3000)
    }
  }, [updateSuccess, updateError])
  useEffect(() => {
    if (error) {
      setResponseError(error)
      setTimeout(() => {
        setResponseError('')
      }, 3000)
    }
    if (success) {
      const { navigation } = props
    }
  }, [success, error])

  useEffect(() => {
    setResponseError('')
    const { getProfile } = props
    getProfile()
  }, [])
  const onUpdate = () => {
    const { profileUpdateRequest } = props
    const isValidString = checkPatternWithExpressionAndString(/^[A-Za-z0-9]+/, {
      firstname: profile.firstname || firstname,
      lastname: profile.lastname || lastname,
      email: profile.email || email
    })
    const userDataRequest = {
      customer: {
        email: email !== '' ? email : profile.email,
        id: profile.id,
        firstname: firstname !== '' ? firstname : profile.firstname,
        lastname: lastname !== '' ? lastname : profile.lastname,
        storeId: 1,
        websiteId: 1
      }
    }
    if (isValidString) {
      profileUpdateRequest(userDataRequest)
    } else {
      setInputError('Please fill all the fields')
    }
  }
  const onCancel = () => {
    setFirstName('')
    setLastName('')
    setResponseError('')
    setEmail(''), firstNameField.clear()
    lastNameField.clear()
    emaiField.clear()
  }
  return (
    <View style={styles.mainView}>
      {(isFetching || isUpdateFetching) && (
        <View>
          <UIActivityIndicator />
        </View>
      )}

      {!isFetching ? (
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps={'handled'}
        >
          {responseError ? <AlertCard message={responseError} /> : null}
          <View>
            <TextField
              label={I18n.t('firstName')}
              ref={ref => (firstNameField = ref)}
              value={profile.firstname}
              onChangeText={firstname => {
                setInputError('')
                setFirstName(firstname)
              }}
              error={firstname ? '' : inputError}
            />
            <TextField
              label={I18n.t('lastName')}
              ref={ref => (lastNameField = ref)}
              value={profile.lastname}
              onChangeText={lastname => {
                setInputError('')
                setLastName(lastname)
              }}
              error={lastname ? '' : inputError}
            />
            <TextField
              label={I18n.t('email')}
              ref={ref => (emaiField = ref)}
              value={profile.email}
              onChangeText={email => {
                setInputError('')
                setEmail(email)
              }}
              error={email ? '' : inputError}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              text={I18n.t('cancel')}
              onPress={onCancel}
              textStyle={styles.commonTextStyle}
              style={[styles.commonButton, styles.cancelBtn]}
              addShadow={true}
            />
            <Button
              text={I18n.t('update')}
              onPress={onUpdate}
              textStyle={styles.commonTextStyle}
              style={styles.commonButton}
              addShadow={true}
            />
          </View>
        </ScrollView>
      ) : null}
    </View>
  )
}
const mapStateToProps = ({ profileInfo, profileUpdate }) => {
  const { isFetching, profile, success, error } = profileInfo
  const {
    isUpdateFetching,
    profileData,
    updateSuccess,
    updateError
  } = profileUpdate
  return {
    isFetching,
    profile,
    success,
    error,
    isUpdateFetching,
    profileData,
    updateSuccess,
    updateError
  }
}
const mapDispatchToProps = dispatch => ({
  getProfile: () => {
    dispatch(profileRequest())
  },
  profileUpdateRequest: args => {
    dispatch(profileUpdateRequest(args))
  },
  saveUserDataRequest: args => {
    dispatch(saveUserDataRequest(args))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
