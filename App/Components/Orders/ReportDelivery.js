import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import SelectionWithText from '../SelectionWithText'
import UploadImage from '../UploadImage'
import Button from '../Button'

const ReportsDelivery = props => {
  const [deliveryType, setDeliveryType] = useState(null)
  const [specialNotes, setSpecialNotes] = useState('')
  const [uploadTitle, setTitle] = useState('No File Chosen')
  const [pitchValue, setPitchValue] = useState('')
  const [alternativeEmail, setAlternativeEmail] = useState('')
  const getEnstimationPriceText = () =>
    deliveryType === '0'
      ? 'Estimation Price: $15.00'
      : 'Estimation Price: $30.00'
  return (
    <View>
      {deliveryType !== null && <Text>{getEnstimationPriceText()}</Text>}
      <Text style={styles.heading}>Delivery</Text>
      <View style={styles.deliveryView}>
        <SelectionWithText
          isSelected={deliveryType === '0'}
          type={'circle'}
          title={'Delivery - 1 Business day or Less'}
        />
        <SelectionWithText
          isSelected={deliveryType === '1'}
          type={'circle'}
          title={'Rush Report Delivey - 2 Hours'}
        />
      </View>
      <View>
        <Text style={styles.heading}>Special Notes</Text>
        <TextInput style={styles.specialNotes} onChangeText={text => {}} />
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
      <Button textStyle={styles.orderText} style={styles.order} text="Order" />
    </View>
  )
}
const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    marginBottom: 20
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 15
  },
  commonMarginTop: {
    marginTop: 10
  },
  deliveryView: {
    flexDirection: 'row'
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
