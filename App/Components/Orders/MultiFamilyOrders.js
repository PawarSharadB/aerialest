import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import UploadImage from '../UploadImage'
import { uploadFile } from '../../Utils/UploadFile'

import SelectionWithText from '../SelectionWithText'
import Button from '../Button'

const MultiFamilyOrders = props => {
  const {
    onPress,
    multifamily_instant_squares,
    multifamily_residential,
    multifamily_commercial,
    fileformat_xml,
    fileformat_esx
  } = props
  const [type, setType] = useState(null)
  const [buildings, setBuildings] = useState(0)
  const [fileFormat, setFileFormat] = useState(null)
  const [specialNotes, setSpecialNotes] = useState('')
  const [uploadTitle, setUploadTitle] = useState('No File Chosen')
  const [pitchValue, setPitchValue] = useState('')
  const [uploadDetails, setUploadDetails] = useState({
    name: 'No File Choosen',
    uri: ''
  })
  const [alternativeEmail, setAlternativeEmail] = useState('')
  const [deliveryType, setDeliveryType] = useState(null)
  const getPrice = () => {
    const multiFamilyPrice =
      type === 0
        ? multifamily_instant_squares
        : type === 1
        ? multifamily_residential
        : multifamily_commercial
    const filePrice = fileFormat
      ? fileFormat === 1
        ? parseInt(fileformat_xml)
        : parseInt(fileformat_esx)
      : 0
    return `Price: $ ${buildings * (multiFamilyPrice + filePrice)}.00`
  }
  return (
    <View style={styles.mainView}>
      {buildings !== 0 && type !== null && (
        <Text style={[styles.commonMarginTop, styles.heading]}>
          {getPrice()}
        </Text>
      )}
      <Text style={[styles.commonMarginTop, styles.heading]}>Type</Text>
      <View style={styles.rowFlexStart}>
        <SelectionWithText
          onSelect={() => setType(1)}
          isSelected={type === 1}
          type={'Circle'}
          title="Instant Squares"
        />
        <SelectionWithText
          onSelect={() => setType(2)}
          isSelected={type === 2}
          type={'Circle'}
          title="Residential"
        />
        <SelectionWithText
          onSelect={() => setType(3)}
          isSelected={type === 3}
          type={'Circle'}
          title="Commercial"
        />
      </View>
      <Text style={[styles.commonMarginTop, styles.heading]}>
        No.Of Buildings
      </Text>
      <TextInput
        style={[styles.enterValue, styles.commonMarginTop]}
        value={buildings}
        onChangeText={value => setBuildings(value)}
      />
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
        <Text style={styles.heading}>Special Notes</Text>
        <TextInput
          value={specialNotes}
          style={styles.specialNotes}
          onChangeText={text => {
            setSpecialNotes(text)
          }}
        />
      </View>
      <Text style={[styles.heading, styles.commonMarginTop]}>Upload Logo</Text>
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
  orderText: {
    color: '#ffffff'
  }
})
