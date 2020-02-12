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
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [searchPlace, setSearchPlace] = useState('')
  const [loading, isLoading] = useState(false)
  const [errorSearchPlace, setSearchPlaceError] = useState('')
  const searchKeyWord = () => {
    // Geocoder.init('AIzaSyCS3gr2lMGQjPZFNkZyMsGPuSnWtGvi92o', { language: 'en' })
    // Geocoder.from(searchPlace)
    //   .then(json => {
    //     let location = json.results[0].geometry.location
    //     console.log(location)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    const region = {
      latitude: 17.440081,
      longitude: 78.348915,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
    setRegion(region)
    setLatitude(`${region.latitude}`)
    setLongitude(`${region.longitude}`)
  }
  const onRegionChange = region => {
    setRegion(region)
  }
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
            value={searchPlace}
            placeholder="Enter a location"
            onChangeText={text => {
              setSearchPlaceError('')
              setSearchPlace(text)
            }}
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
            placeholder="Enter Latitude"
            value={latitude}
            onChangeText={text => setLatitude(text)}
          />
          <TextField
            placeholder="Enter Longitude"
            value={longitude}
            onChangeText={text => setLongitude(text)}
          />
          <Button
            text="Search"
            style={styles.button}
            showSmallText={false}
            textStyle={styles.textStyle}
          />
        </CardView>
        <MapView
          region={region}
          onRegionChangeComplete={onRegionChange}
          style={{ width: '100%', height: 200, marginTop: 20 }}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
