import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import * as Actions from '../Sagas/profile/Actions'

const Profile = props => {
  const [responseError, setResponseError] = useState(null)
  const { success, error } = props
  useEffect(() => {
    if (error) {
      setResponseError(error)
    }
    if (success) {
      const { navigation } = props
      setResponseError(error)
      //navigation.navigate('Home')
    }
  }, [success, error])

  useEffect(() => {
    const { getProfile } = props
    getProfile()
  }, [])
  return (
    <View>
      {responseError ? (
        <View>
          <Text>{responseError}</Text>
        </View>
      ) : null}
    </View>
  )
}
const mapStateToProps = ({ profileInfo }) => {
  console.log(profileInfo, 'info')
  const { profile, success, error } = profileInfo
  return {
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
