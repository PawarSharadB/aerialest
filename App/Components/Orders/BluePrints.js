import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import UploadImage from '../UploadImage'
import Button from '../Button'
const BluePrints = props => {
  const { onPress, blueprint } = props
  const [uploadTitle, setUploadTitle] = useState('No File Chosen')
  const [alternativeEmail, setAlternativeEmail] = useState('')
  const [deliveryType, setDeliveryType] = useState(null)

  const getEnstimationPriceText = () => `Price: $ ${blueprint}.00`
  return (
    <View style={styles.mainView}>
      <Text style={[styles.commonMarginTop, styles.heading]}>
        {getEnstimationPriceText()}
      </Text>

      <Text style={[styles.commonMarginTop, styles.heading]}>Upload Logo</Text>
      <UploadImage
        onPress={() => {
          console.log('Upload Image Button Pressed')
        }}
        title={uploadTitle}
        buttonTitle={'Choose File'}
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
        style={styles.order}
        text="Order"
        textStyle={styles.ordersText}
      />
    </View>
  )
}
export default BluePrints
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
