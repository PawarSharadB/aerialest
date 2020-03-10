import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import UploadImage from '../UploadImage'
import SelectionWithText from '../SelectionWithText'
import Button from '../Button'
import { uploadFile } from '../../Utils/UploadFile'

const InstantSquareAndTrailReports = props => {
  const { type, onPress, TrailPrice } = props
  const [measurements, setMeasurements] = useState(null)
  const [delivery, setDelivery] = useState(null)
  const [specialNotes, setSpecialNotes] = useState('')
  const [uploadTitle, setUploadTitle] = useState('No File Chosen')
  const [pitchValue, setPitchValue] = useState('')
  const [alternativeEmail, setAlternativeEmail] = useState('')
  const [deliveryType, setDeliveryType] = useState(null)
  const [uploadDetails, setUploadDetails] = useState({
    name: 'No File Choosen',
    uri: ''
  })

  const getPrice = () => {
    if (type !== 'instantSquares') {
      return delivery === 1
        ? `Price $ ${TrailPrice * 1}.00`
        : `Price $ ${TrailPrice * 2}.00`
    }
    return `Price $ ${TrailPrice * 1}.00`
  }
  const showPrice = () => {
    if (type !== 'instantSquares') {
      return delivery !== null
    }
    return true
  }
  return (
    <View style={styles.mainView}>
      {showPrice() && (
        <Text style={[styles.commonMarginTop, styles.heading]}>
          {getPrice()}
        </Text>
      )}

      {type === 'instantSquares' && (
        <View>
          <Text style={[styles.heading, styles.commonMarginTop]}>
            MeasureMents
          </Text>
          <View style={styles.rowFlexStart}>
            <SelectionWithText
              onSelect={() => {
                setMeasurements(1)
                setDeliveryType
              }}
              isSelected={measurements === 1}
              type={'Circle'}
              title="Main Structure + Garage"
            />
            <SelectionWithText
              onSelect={() => setMeasurements(2)}
              isSelected={measurements === 2}
              type={'Circle'}
              title="Main Structure"
            />
          </View>
        </View>
      )}
      <View>
        <Text style={[styles.commonMarginTop, styles.heading]}>Delivery</Text>
        <View style={styles.rowFlexStart}>
          {type !== 'instantSquares' && (
            <SelectionWithText
              onSelect={() => setDelivery(1)}
              isSelected={delivery === 1}
              type={'Circle'}
              title="Delivery - 1 Business day or Less"
            />
          )}
          <SelectionWithText
            onSelect={() => setDelivery(2)}
            isSelected={delivery === 2}
            type={'Circle'}
            title="Delivery - 2 Business Hours"
          />
        </View>
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
      <Text style={[styles.commonMarginTop, styles.heading]}>Upload Logo</Text>
      <UploadImage
        onPress={() => {
          uploadFile((response, error) => {
            if (error === null) {
              const { name, uri } = response
              setUploadDetails({ name, uri })
            }
          })
        }}
        title={uploadDetails.name}
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
    </View>
  )
}
export default InstantSquareAndTrailReports

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
  orderText: {
    color: '#ffffff'
  }
})
