import React, { useState } from 'react'
import { ScrollView, View, Text, Button, FlatList } from 'react-native'
import ParsedText from 'react-native-parsed-text'
import CardView from 'react-native-cardview'
import { TextField } from 'react-native-material-textfield'
import Modal from 'react-native-modal'
import { PopUpDropDown } from '../Components/Contact/PopUpDropDown'
import { styles } from './Styles/ContactStyles'
import { PopUpOptions } from '../Components/Contact/PopUpOptions'
import { getContactusList } from '../Utils/getContactUsList'

const contactUsResponse = require('../Utils/Resources.json').contactUsPage
const ContactUs = props => {
  const [firstName, onChangeFirstName] = useState('')
  const [lastName, onChangeLastName] = useState('')
  const [email, onChangeEmail] = useState('')
  const [company, onChangeCompany] = useState('')
  const [name, onChangeName] = useState('')
  const [comment, onChangeComment] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [popUpOptions, setPopUpOptions] = useState(getContactusList())
  const renderItemForPopup = ({ item, index }) => {
    const { title, isSelected } = item
    return (
      <PopUpOptions
        isSelected={isSelected}
        onPressTile={() => {
          const options = getContactusList()
          const itemAtIndex = options[index]
          itemAtIndex.isSelected = !itemAtIndex.isSelected
          setPopUpOptions(options)
        }}
        title={title}
      />
    )
  }
  return (
    <ScrollView>
      <Modal
        animationOut="bounceOut"
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
      >
        <View style={styles.popUpListContainer}>
          <FlatList
            data={popUpOptions}
            renderItem={item => renderItemForPopup(item)}
          />
        </View>
      </Modal>
      <View style={styles.mainView}>
        <CardView
          style={styles.cardView}
          cardElevation={3}
          cardMaxElevation={3}
          cornerRadius={5}
        >
          <ParsedText style={styles.emailUs}>
            {contactUsResponse.email_title}
          </ParsedText>
          <ParsedText
            parse={[{ type: 'email', style: styles.email }]}
            style={styles.commoonMarginTop}
          >
            info@aerialestimation.com
          </ParsedText>
          <ParsedText
            parse={[{ type: 'email', style: styles.email }]}
            style={styles.commoonMarginTop}
          >
            orders@aerialestimation.com
          </ParsedText>
          <ParsedText
            parse={[
              { pattern: /Phone Number:/, style: styles.boldTitle },
              { pattern: /[0-9-]/, style: styles.normalTitle }
            ]}
            style={styles.commoonMarginTop}
          >
            Phone Number: 424-666-2345
          </ParsedText>
          <ParsedText
            parse={[
              { pattern: /Fax Numbers:/, style: styles.boldTitle },
              { pattern: /[0-9-]/, style: styles.normalTitle }
            ]}
            style={styles.commoonMarginTop}
          >
            Fax Numbers: 424-204-0720
          </ParsedText>
          <ParsedText
            parse={[
              { pattern: /Working hours:/, style: styles.boldTitle },
              { pattern: /Weekdays/, style: styles.boldTitle }
            ]}
            style={[styles.normalTitle, styles.commoonMarginTop]}
          >
            Working hours: Weekdays Mon - Fri 8:00 AM - 6: 00 PM CST
          </ParsedText>
          <ParsedText
            parse={[{ pattern: /Saturday:/, style: styles.boldTitle }]}
            style={[styles.normalTitle, styles.commoonMarginTop]}
          >
            8: 00 AM - 12: 00 PM CST
          </ParsedText>
          <ParsedText
            parse={[{ type: 'url', style: styles.boldTitle }]}
            style={styles.commoonMarginTop}
          >
            www.aerialestimation.com
          </ParsedText>
        </CardView>
        <View style={{ paddingHorizontal: 10, justifyContent: 'flex-start' }}>
          <Text style={styles.contactUs}>Contact Us: </Text>
          <TextField
            placeholder="First Name"
            onChangeText={text => onChangeFirstName(text)}
            value={firstName}
          />
          <TextField
            placeholder="Last Name"
            onChangeText={text => onChangeLastName(text)}
            value={firstName}
          />
          <TextField
            placeholder="Email"
            onChangeText={text => onChangeEmail(text)}
            value={firstName}
          />
          <TextField
            placeholder="Company"
            onChangeText={text => onChangeCompany(text)}
            value={firstName}
          />
          <TextField
            placeholder="Name"
            onChangeText={text => onChangeName(text)}
            value={firstName}
          />
          <TextField
            placeholder="Comment"
            onChangeText={text => onChangeComment(text)}
            value={firstName}
          />
        </View>
        <PopUpDropDown
          title={'How Did You Hear About Us'}
          onPress={() => setShowModal(true)}
        />
        <Button
          title="Submit"
          style={{ width: '100%', position: 'absolute', bottom: 0 }}
        />
      </View>
    </ScrollView>
  )
}
export default ContactUs
