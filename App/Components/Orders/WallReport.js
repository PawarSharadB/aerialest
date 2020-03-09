import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import UploadImage from '../UploadImage'
import SelectionWithText from '../SelectionWithText'
import Button from '../Button'

const MultiFamilyOrders = props => {
  const { onPress } = props
  const [type, setType] = useState(null)
  const [uploadTitle, setUploadTitle] = useState('No File Chosen')
  const [specialNotes, setSpecialNotes] = useState('')
  const [pitchValue, setPitchValue] = useState('')
  const [alternativeEmail, setAlternativeEmail] = useState('')
  const [deliveryType, setDeliveryType] = useState(null)
  const getEnstimationPriceText = () =>
    deliveryType === '0'
      ? 'Estimation Price: $15.00'
      : 'Estimation Price: $30.00'
  return (
    <View style={styles.mainView}>
      {deliveryType !== null && <Text>{getEnstimationPriceText()}</Text>}
      <Text style={[styles.commonMarginTop, styles.heading]}>Upload Logo</Text>
      <View style={styles.rowFlexStart}>
        <SelectionWithText
          onSelect={() => setType('1')}
          isSelected={type === '1'}
          type={'Circle'}
          title="Wall Pro"
        />
        <SelectionWithText
          onSelect={() => setType('2')}
          isSelected={type === '2'}
          type={'Circle'}
          title="Residential"
        />
        <SelectionWithText
          onSelect={() => setType('3')}
          isSelected={type === '3'}
          type={'Circle'}
          title="Multi Family"
        />
      </View>
      <View>
        <Text style={styles.heading}>Special Notes</Text>
        <TextInput
          value={specialNotes}
          style={styles.specialNotes}
          onChangeText={text => {
            setSpecialNotes(text)
          }}
        />
      </View>
      <Text style={[styles.commonMarginTop, styles.heading]}>Upload Logo</Text>
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
        textStyle={styles.ordersText}
        style={styles.order}
        text="Order"
      />
    </View>
  )
}
export default MultiFamilyOrders

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 20
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
  ordersText: {
    color: '#ffffff'
  }
})
