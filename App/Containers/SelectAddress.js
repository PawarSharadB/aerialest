import React, { useState } from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import Geocoder from 'react-native-geocoding'
import CardView from 'react-native-cardview'
import { TextField } from 'react-native-material-textfield'
import MapView from 'react-native-maps'
import Button from '../Components/Button'
import ParsedText from 'react-native-parsed-text'
import { styles } from './Styles/SelectAddressStyles'
import { getInitialRegionForMap } from '../Utils/getInitialRegionForMap'

export const SelectAddress = props => {
  const [region, setRegion] = useState(getInitialRegionForMap().region)
  const [loading, isLoading] = useState(false)
  const [errorSearchPlace, setSearchPlaceError] = useState('')
  const [errorlatitude, setLatitudeError] = useState('')
  const [errorLongitude, setLongitudeError] = useState('')

  const searchKeyWord = () => {
    if (region.place === '') {
      setSearchPlaceError('Please Enter Valid Place To Search')
      return
    }
    Geocoder.init('AIzaSyCSiNb2QI4HfoA6c7xBjs3UWf8WIPeCmrw', { language: 'en' })
    Geocoder.from(region.place)
      .then(json => {
        let location = json.results[0].geometry.location
        const { lat: latitude, lng: longitude } = location
        setRegion(region => ({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          place: region.place
        }))
      })
      .catch(error => {
        console.log(error)
      })
  }
  const searchWithLatAndLang = () => {
    const { latitude, longitude } = region
    if (latitude === '') {
      setLatitudeError('Please Select Valid Latitude')
      return
    }
    if (longitude === '') {
      setLongitudeError('Please Select Valid Longitude')
      return
    }
    Geocoder.init('AIzaSyCSiNb2QI4HfoA6c7xBjs3UWf8WIPeCmrw', { language: 'en' })
    Geocoder.from(latitude, longitude)
      .then(json => {
        let address = json.results[1].formatted_address
        setRegion(region => ({ ...region, place: address }))
      })
      .catch(error => {
        console.log(error)
      })
  }

  const onRegionChange = region => {
    setRegion(region)
  }
  const getRegionLatandLng = () => ({
    latitude: region.latitude,
    longitude: region.longitude,
    latitudeDelta: region.latitudeDelta,
    longitudeDelta: region.longitudeDelta
  })
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.mainView}>
        <ParsedText
          parse={[{ pattern: /video/, style: styles.video }]}
          style={styles.newToOrders}
        >
          New to Orders ? See this video
        </ParsedText>
        <CardView style={styles.cardView}>
          <TextField
            placeholder="Enter a location"
            onChangeText={text => {
              setSearchPlaceError('')
              setRegion(region => ({ ...region, place: text }))
            }}
            value={region.place}
            error={errorSearchPlace}
          />
          <Button
            text="Search"
            style={styles.button}
            showSmallText={false}
            textStyle={styles.textStyle}
            onPress={searchKeyWord}
          />
        </CardView>
        <CardView style={styles.cardView}>
          <TextField
            keyboardType="numbers-and-punctuation"
            placeholder="Enter Latitude"
            value={`${region.latitude}`}
            onChangeText={text => {
              setLatitudeError('')
              setRegion(region => ({
                ...region,
                latitude: parseFloat(text) ? parseFloat(text) : 0
              }))
            }}
            error={errorlatitude}
          />
          <TextField
            keyboardType="numbers-and-punctuation"
            placeholder="Enter Longitude"
            value={`${region.longitude}`}
            onChangeText={text => {
              setLongitudeError('')
              setRegion(region => ({
                ...region,
                longitude: parseFloat(text) ? parseFloat(text) : 0
              }))
            }}
            error={errorLongitude}
          />
          <Button
            text="Search"
            style={styles.button}
            showSmallText={false}
            textStyle={styles.textStyle}
            onPress={() => {
              searchWithLatAndLang()
            }}
          />
        </CardView>
        <MapView
          region={getRegionLatandLng()}
          onRegionChangeComplete={onRegionChange}
          style={{ width: '100%', height: 200, marginTop: 20 }}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
