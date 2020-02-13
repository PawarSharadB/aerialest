import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import CardView from 'react-native-cardview'
import { UIActivityIndicator } from 'react-native-indicators'

import * as Actions from '../Sagas/profile/Actions'
import { styles } from './Styles/ProfileStyles'

const Profile = props => {
  const [responseError, setResponseError] = useState(null)
  const { success, error, profile, isFetching } = props
  useEffect(() => {
    if (error) {
      setResponseError(error)
    }
    if (success) {
      const { navigation } = props
    }
  }, [success, error])

  useEffect(() => {
    const { getProfile } = props
    getProfile()
  }, [])
  return (
    <View style={styles.mainView}>
      {isFetching && (
        <View>
          <UIActivityIndicator />
        </View>
      )}
      {responseError ? (
        <View>
          <Text>{responseError}</Text>
        </View>
      ) : null}
      {!isFetching && !responseError ? (
        <CardView
          cardElevation={1}
          cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <View>
            <Text style={styles.text}>First Name: {profile.firstname}</Text>
            <Text style={styles.text}>Last name: {profile.lastname}</Text>
            <Text style={styles.text}>Email: {profile.email}</Text>
          </View>
        </CardView>
      ) : null}
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
    dispatch(Actions.profileRequest())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
