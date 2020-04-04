import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Dimensions, PermissionsAndroid } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import MapView, { Marker, PROVIDER_GOOGLE, MAP_TYPES } from 'react-native-maps'
import Button from '../Components/Button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { geoPermissions } from '../Utils/getPermissions'
const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

const SelectAddress = (props) => {
  const {
    navigation: { state }
  } = props
  const regionData = {
    latitude: state.params ? state.params.region.latitude : LATITUDE,
    longitude: state.params ? state.params.region.longitude : LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  }
  const map = useRef(null)
  let mapRefq = null
  const [region, setRegion] = useState(regionData)
  const [marginBottom, setMarginBottom] = useState(1)
  const [mapRef, setMapRef] = useState(null)
  const [mapType, setMapType] = useState(MAP_TYPES.SATELLITE)
  const onMapPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate
    setRegion((prevRegion) => ({ ...prevRegion, latitude, longitude }))
  }

  const onMapReady = () => {
    setMarginBottom(0)
  }
  const onPressMyLocation = async () => {
    const granted = await geoPermissions()
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const positionCallback = (position) => {
        const { latitude, longitude } = position.coords
        setRegion((prevRegion) => ({ ...prevRegion, latitude, longitude }))
        if (mapRef !== null) {
          mapRef.animateCamera({ center: { latitude, longitude } })
        }
      }
      const errorCallback = (error) => {
        console.log(error)
      }
      const extraParams = {
        maximumAge: 3000,
        timeout: 5000,
        enableHighAccuracy: true
      }
      Geolocation.getCurrentPosition(
        positionCallback,
        errorCallback,
        extraParams
      )
    }
  }
  const onDragEndHandle = (e) => {
    const { latitudeDelta, longitudeDelta } = mapRefq.__lastRegion
    const { latitude, longitude } = e.nativeEvent.coordinate
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta
    }))
  }
  const onPressNext = () => {
    const { navigation } = props
    navigation.push('PlaceOrder', { region, address: state.params.address })
  }
  return (
    <View style={styles.container}>
      <MapView
        ref={(ref) => (mapRefq = ref)}
        style={[styles.map, { marginBottom: marginBottom }]}
        region={region}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        mapType={mapType}
        zoomEnabled={true}
        rotateEnabled={true}
        loadingEnabled={true}
        zoomTapEnabled={true}
        minZoomLevel={10}
        onMapReady={onMapReady}
        zoomControlEnabled={true}
        allowScrollGesturesDuringRotateOrZoom={true}
        // onMarkerDragStart={onDragEndHandle}
      >
        <Marker
          key={'i29'}
          draggable
          onDragEnd={onDragEndHandle}
          //title={'You are here'}
          coordinate={region}
        />
      </MapView>
      <View style={styles.locationButton}>
        <Icon
          size={30}
          name="my-location"
          color="#666667"
          onPress={onPressMyLocation}
        />
      </View>
      <View style={styles.mapTypeButtonView}>
        <Button
          text="Map"
          style={styles.mapTypeButton}
          textStyle={[
            {
              color: mapType === MAP_TYPES.STANDARD ? '#000000' : 'gray'
            },
            styles.mapTypeButtonText
          ]}
          onPress={() => {
            setMapType(MAP_TYPES.STANDARD)
          }}
        />
        <Button
          text="Satellite"
          style={styles.mapTypeButton}
          textStyle={[
            { color: mapType === MAP_TYPES.SATELLITE ? '#000000' : 'gray' },
            styles.mapTypeButtonText
          ]}
          onPress={() => {
            setMapType(MAP_TYPES.SATELLITE)
          }}
        />
      </View>
      <Button
        style={styles.button}
        onPress={onPressNext}
        text={'Next'}
        textStyle={styles.buttonTitle}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  locationButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    position: 'absolute',
    right: 20,
    top: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#0485B2'
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 20
  },
  mapTypeButtonView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 200,
    height: 40,
    position: 'absolute',
    left: 10,
    top: 10
  },
  mapTypeButton: {
    minWidth: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 0,
    height: 40,
    padding: 0
  },
  mapTypeButtonText: {
    marginTop: 10,
    paddingVertical: 0,
    alignSelf: 'center'
  }
})

export default SelectAddress
