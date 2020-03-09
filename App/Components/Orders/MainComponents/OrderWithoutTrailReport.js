import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import SelectionWithText from '../../SelectionWithText'
import UploadImage from '../../UploadImage'
import InstantSquaresView from '../InstantSquaresAndTrailReports'
import ResedentialAndCommercialOrders from '../ResedentialAndCommercialOrders'
import MultiFamily from '../MultiFamilyOrders'
import WallReport from '../WallReport'
import BluePrints from '../BluePrints'
import Button from '../../../Components/Button'
const OrderWithOutTrailReport = props => {
  const {
    onPress,
    data: {
      InstantSquares,
      residential_30,
      residential_30plus,
      commercial_60,
      commercial_60plus,
      multifamily_instant_squares,
      multifamily_residential,
      multifamily_commercial,
      multifamily_multifamily,
      wallreport_pro,
      wallreport_residential,
      blueprint,
      fileformat_esx,
      rush_report,
      fileformat_xml
    }
  } = props
  const [selectedType, setSelectedType] = useState(null)
  const [measurements, setMeasurements] = useState(null)
  const [specialNotes, setSpecialNotes] = useState('')
  const [uploadTitle, setUploadTitle] = useState('No File Chosen')
  const [pitchValue, setPitchValue] = useState('')
  const [alternativeEmail, setAlternativeEmail] = useState('')
  const getNonTrailReportView = () => {
    switch (selectedType) {
      case '1':
        return (
          <InstantSquaresView
            TrailPrice={InstantSquares}
            onPress={onPress}
            type="instantSquares"
          />
        )
      case '2':
        return (
          <ResedentialAndCommercialOrders
            residential_30={residential_30}
            residential_30plus={residential_30plus}
            onPress={onPress}
            type={'Resedential'}
          />
        )
      case '3':
        return (
          <ResedentialAndCommercialOrders
            commercial_60={commercial_60}
            commercial_60plus={commercial_60plus}
            onPress={onPress}
            type={'Commercial'}
          />
        )
      case '4':
        return (
          <MultiFamily
            multifamily_instant_squares={multifamily_instant_squares}
            multifamily_residential={multifamily_residential}
            multifamily_commercial={multifamily_commercial}
            multifamily_multifamily={multifamily_multifamily}
            onPress={onPress}
          />
        )
      case '5':
        return (
          <BluePrints
            blueprint={blueprint}
            fileformat_esx={fileformat_esx}
            rush_report={rush_report}
            fileformat_xml={fileformat_xml}
            onPress={onPress}
          />
        )
      default:
        return <View />
    }
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.typesView}>
        <SelectionWithText
          isSelected={selectedType === '1'}
          type={'Circle'}
          title={'Instant Squares'}
          onSelect={() => {
            setSelectedType('1')
          }}
        />
        <SelectionWithText
          isSelected={selectedType === '2'}
          type={'Circle'}
          title={'Residential'}
          onSelect={() => {
            setSelectedType('2')
          }}
        />
        <SelectionWithText
          isSelected={selectedType === '3'}
          type={'Circle'}
          title={'Commercial'}
          onSelect={() => {
            setSelectedType('3')
          }}
        />
        <SelectionWithText
          isSelected={selectedType === '4'}
          type={'Circle'}
          title={'Multi Family'}
          onSelect={() => {
            setSelectedType('4')
          }}
        />
        <SelectionWithText
          isSelected={selectedType === '5'}
          type={'Circle'}
          title={'Blue prints'}
          onSelect={() => {
            setSelectedType('5')
          }}
        />
      </View>
      {selectedType && <View>{getNonTrailReportView()}</View>}
      {!selectedType && (
        <View style={styles.mainView}>
          <Text style={[styles.heading, styles.commonMarginTop]}>
            MeasureMents
          </Text>
          <View style={styles.rowFlexStart}>
            <SelectionWithText
              onSelect={() => {
                setMeasurements('1')
              }}
              isSelected={measurements === '1'}
              type={'Circle'}
              title="Main Structure + Garage"
            />
            <SelectionWithText
              onSelect={() => {
                setMeasurements('2')
              }}
              isSelected={measurements === '2'}
              type={'Circle'}
              title="Main Structure"
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
              multiline
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
            style={styles.order}
            text="Order"
            textStyle={styles.ordersText}
          />
        </View>
      )}
    </View>
  )
}
export default OrderWithOutTrailReport

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 20
  },
  typesView: {
    flexDirection: 'row',
    flexWrap: 'wrap'
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
