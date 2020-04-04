import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { encode } from 'base-64'
import UploadImage from '../UploadImage'
import SelectionWithText from '../SelectionWithText'
import Button from '../Button'
import { uploadFile } from '../../Utils/UploadFile'
const ResedentialAndCommercialOrders = (props) => {
  const {
    type,
    onPress,
    residential_30,
    residential_30plus,
    commercial_60,
    commercial_60plus,
    fileformat_xml,
    fileformat_esx
  } = props
  const [estimationArea, setEstimationArea] = useState(null)
  const [measurements, setMeasurements] = useState(null)
  const [delivery, setDelivery] = useState(null)
  const [fileFormat, setFileFormat] = useState(null)
  const [specialNotes, setSpecialNotes] = useState('')
  const [uploadDetails, setUploadDetails] = useState({
    name: 'No File Choosen',
    uri: ''
  })
  const [pitchValue, setPitchValue] = useState('')
  const [alternativeEmail, setAlternativeEmail] = useState('')
  const validate = () => {
    let errorMessage = null

    estimationArea
      ? delivery
        ? measurements
          ? onPress({
              type,
              price: priceWithoutText(),
              estimationArea:
                estimationArea === 1
                  ? type === 'commercial'
                    ? 'Below 60 Squares'
                    : 'Below 30 Squares'
                  : type === 'commercial'
                  ? 'Above 60 Squares'
                  : 'Above 30 Squares',
              measurements:
                measurements === 1
                  ? 'Main Structure + Garage'
                  : 'Main Structure',
              delivery:
                delivery === 1
                  ? 'Delivery - 1 Business day or Less'
                  : 'Rush Report Delivey - 4 Hours',
              fileFormat: fileFormat === 1 ? 'XML' : 'ESX',
              specialNotes,
              uploadDetails: {
                name: uploadDetails.name,
                uri: uploadDetails.data
              },
              pitchValue,
              alternativeEmail
            })
          : (errorMessage = 'Please select Measurement structure')
        : (errorMessage = 'Please select Delivery')
      : (errorMessage = 'Please select estimation area')
    if (errorMessage) {
      Alert.alert('Alert!', errorMessage, [{ style: 'cancel' }])
    }
  }
  const priceWithoutText = () => {
    let price = null
    if (type === 'Commercial') {
      const commercialPrice =
        estimationArea === 1
          ? parseInt(commercial_60)
          : parseInt(commercial_60plus)
      const deliveryPrice = delivery ? (delivery === 1 ? 0 : 15) : 0
      const fileFormarPrice = fileFormat
        ? fileFormat === 1
          ? parseInt(fileformat_xml)
          : fileFormat === 2
          ? parseInt(fileformat_esx)
          : 0
        : 0
      price = commercialPrice + deliveryPrice + fileFormarPrice
    } else {
      const resedentialPrice =
        estimationArea === 1
          ? parseInt(residential_30)
          : parseInt(residential_30plus)
      const deliveryPrice = delivery ? (delivery === 1 ? 0 : 15) : 0
      const fileFormarPrice = fileFormat
        ? fileFormat === 1
          ? parseInt(fileformat_xml)
          : fileFormat === 2
          ? parseInt(fileformat_esx)
          : 0
        : 0
      price = resedentialPrice + deliveryPrice + fileFormarPrice
    }
    return price
  }
  const showPrice = () => {
    return estimationArea !== null
  }
  const priceText = () => {
    return `Price: $ ${priceWithoutText()}: 00`
  }
  return (
    <View style={styles.mainView}>
      {showPrice() && (
        <Text style={[styles.commonMarginTop, styles.heading]}>
          {priceText()}
        </Text>
      )}

      <Text style={[styles.commonMarginTop, styles.heading]}>
        Estimation Area
      </Text>
      <View style={styles.rowFlexStart}>
        <SelectionWithText
          onSelect={() => setEstimationArea(1)}
          isSelected={estimationArea === 1}
          type={'Circle'}
          title={
            type === 'Commercial' ? 'Below 60 Squares' : 'Below 30 Squares'
          }
        />
        <SelectionWithText
          onSelect={() => setEstimationArea(2)}
          isSelected={estimationArea === 2}
          type={'Circle'}
          title={
            type === 'Commercial' ? 'Above 60 Squares' : 'Above 30 Squares'
          }
        />
      </View>
      <Text style={[styles.commonMarginTop, styles.heading]}>Measurements</Text>
      <View style={styles.rowFlexStart}>
        <SelectionWithText
          onSelect={() => setMeasurements(1)}
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
      {estimationArea !== null && (
        <View>
          <Text style={[styles.commonMarginTop, styles.heading]}>Delivery</Text>
          <View style={styles.rowFlexStart}>
            <SelectionWithText
              onSelect={() => setDelivery(1)}
              isSelected={delivery === 1}
              type={'Circle'}
              title="Delivery - 1 Business day or Less"
            />
            <SelectionWithText
              onSelect={() => setDelivery(2)}
              isSelected={delivery === 2}
              type={'Circle'}
              title={
                estimationArea === 2
                  ? 'Rush Report Delivery - 4 Business Hour'
                  : 'Rush Report Delivery - 2 Business Hour'
              }
            />
          </View>
        </View>
      )}
      <Text style={[styles.commonMarginTop, styles.heading]}>File Format</Text>
      <View style={styles.rowFlexStart}>
        <SelectionWithText
          onSelect={() => setFileFormat(1)}
          isSelected={fileFormat === 1}
          type={'Circle'}
          title="XML"
        />
        <SelectionWithText
          onSelect={() => setFileFormat(2)}
          isSelected={fileFormat === 2}
          type={'Circle'}
          title="ESX"
        />
        <SelectionWithText
          onSelect={() => setFileFormat(3)}
          isSelected={fileFormat === 3}
          type={'Circle'}
          title="None"
        />
      </View>
      <View>
        <Text style={[styles.heading, styles.commonMarginTop]}>
          Special Notes
        </Text>
        <TextInput
          value={specialNotes}
          style={styles.specialNotes}
          onChangeText={(text) => {
            setSpecialNotes(text)
          }}
        />
      </View>
      <Text style={[styles.commonMarginTop, styles.heading]}>Upload Logo</Text>
      <UploadImage
        onPress={() => {
          uploadFile((response, error) => {
            if (error === null) {
              const { name, data } = response
              setUploadDetails({ name, data })
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
        onChangeText={(value) => {
          setPitchValue(value)
        }}
      />
      <Text style={[styles.commonMarginTop, styles.heading]}>
        Enter Alternate Email:
      </Text>
      <TextInput
        style={[styles.commonMarginTop, styles.enterValue]}
        value={alternativeEmail}
        onChangeText={(value) => {
          setAlternativeEmail(value)
        }}
      />
      <Button
        onPress={validate}
        textStyle={styles.orderText}
        style={styles.order}
        text="Order"
      />
    </View>
  )
}
export default ResedentialAndCommercialOrders

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
