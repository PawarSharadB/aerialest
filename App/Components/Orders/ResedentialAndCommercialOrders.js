import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import UploadImage from '../UploadImage'
import SelectionWithText from '../SelectionWithText'
import Button from '../Button'

const ResedentialAndCommercialOrders = props => {
  const { type, onPress } = props
  const [estimationArea, setEstimationArea] = useState(null)
  const [measurements, setMeasurements] = useState(null)
  const [fileFormat, setFileFormat] = useState(null)
  const [specialNotes, setSpecialNotes] = useState('')
  const [uploadTitle, setUploadTitle] = useState('No File Chosen')
  const [pitchValue, setPitchValue] = useState('')
  const [alternativeEmail, setAlternativeEmail] = useState('')
  const [deliveryType, setDeliveryType] = useState(null)

  const getEnstimationPriceText = () =>
    deliveryType === '0'
      ? 'Estimation Price: $15.00'
      : 'Estimation Price: $30.00'

  return (
    <View style={styles.mainView}>
      <Text style={[styles.commonMarginTop, styles.heading]}>
        Estimation Area
      </Text>
      <View style={styles.rowFlexStart}>
        <SelectionWithText
          onSelect={() => setEstimationArea('1')}
          isSelected={estimationArea === '1'}
          type={'Circle'}
          title="60 Squares"
        />
        <SelectionWithText
          onSelect={() => setEstimationArea('2')}
          isSelected={estimationArea === '2'}
          type={'Circle'}
          title="60+ Squares"
        />
      </View>
      <Text style={[styles.commonMarginTop, styles.heading]}>Measurements</Text>
      <View style={styles.rowFlexStart}>
        <SelectionWithText
          onSelect={() => setMeasurements('1')}
          isSelected={measurements === '1'}
          type={'Circle'}
          title="Main Structure + Garage"
        />
        <SelectionWithText
          onSelect={() => setMeasurements('2')}
          isSelected={measurements === '2'}
          type={'Circle'}
          title="Main Structure"
        />
      </View>
      <Text style={[styles.commonMarginTop, styles.heading]}>File Format</Text>
      <View style={styles.rowFlexStart}>
        <SelectionWithText
          onSelect={() => setFileFormat('1')}
          isSelected={fileFormat === '1'}
          type={'Circle'}
          title="XML"
        />
        <SelectionWithText
          onSelect={() => setFileFormat('2')}
          isSelected={fileFormat === '2'}
          type={'Circle'}
          title="ESX"
        />
      </View>
      <View>
        <Text style={[styles.heading, styles.commonMarginTop]}>
          Special Notes
        </Text>
        <TextInput
          value={specialNotes}
          style={styles.specialNotes}
          onChangeText={text => {
            setSpecialNotes(text)
          }}
        />
      </View>
      <UploadImage
        onPress={() => {
          console.log('Upload Image Button Pressed')
        }}
        title={uploadTitle}
        buttonTitle={'Choose File'}
      />
      <Text style={[styles.commonMarginTop, styles.heading]}>
        Enter Pitch value if known
      </Text>
      <TextInput
        style={[styles.commonMarginTop, styles.enterValue]}
        value={pitchValue}
        onChangeText={value => {
          setPitchValue(value)
        }}
      />
      <Text style={[styles.commonMarginTop, styles.heading]}>
        Enter Alternate Email:
      </Text>
      <TextInput
        style={[styles.commonMarginTop, styles.enterValue]}
        value={alternativeEmail}
        onChangeText={value => {
          setAlternativeEmail(value)
        }}
      />
      <Button
        onPress={onPress}
        textStyle={styles.orderText}
        style={styles.order}
        text="Order"
      />
      {deliveryType !== null && <Text>{getEnstimationPriceText()}</Text>}
    </View>
  )
}
export default ResedentialAndCommercialOrders

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 15
  },
  commonMarginTop: {
    marginTop: 10
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 10
  },
  specialNotes: {
    height: 100,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10
  },
  enterValue: {
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#C2C2C2'
  },
  order: {
    minWidth: 100,
    height: 50,
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#0485B2'
  },
  orderText: {
    color: '#ffffff'
  }
})
