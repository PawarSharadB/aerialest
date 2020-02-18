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
import { validateContactUs } from '../Utils/validateContactUs'
const contactUsResponse = require('../Utils/Resources.json').contactUsPage

const ContactUs = props => {
  let [firstName, onChangeFirstName] = useState({ firstName: '', error: '' })
  let [lastName, onChangeLastName] = useState({ lastName: '', error: '' })
  let [email, onChangeEmail] = useState({ email: '', error: '' })
  let [company, onChangeCompany] = useState({ company: '', error: '' })
  let [phone, onChangePhone] = useState({ phone: '', error: '' })
  let [comment, onChangeComment] = useState({ comment: '', error: '' })
  let [showModal, setShowModal] = useState(false)
  let [popUpOptions, setPopUpOptions] = useState(getContactusList())

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
          setShowModal(false)
        }}
        title={title}
      />
    )
  }
  const onPressButton = () => {
    const result = validateContactUs({
      firstName,
      lastName,
      phone,
      comment,
      company,
      email
    })
    onChangeFirstName({ ...result.firstName })
    onChangeLastName({ ...result.lastName })
    onChangeEmail({ ...result.email })
    onChangeCompany({ ...result.company })
    onChangePhone({ ...result.phone })
    onChangeComment({ ...result.comment })
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
            onChangeText={text =>
              onChangeFirstName({ firstName: text, error: '' })
            }
            value={firstName.firstName}
            error={firstName.error}
          />
          <TextField
            placeholder="Last Name"
            onChangeText={text =>
              onChangeLastName({ lastName: text, error: '' })
            }
            value={lastName.lastName}
            error={lastName.error}
          />
          <TextField
            placeholder="Email"
            onChangeText={text => onChangeEmail({ email: text, error: '' })}
            value={email.email}
            error={email.error}
          />
          <TextField
            placeholder="Company"
            onChangeText={text => onChangeCompany({ company: text, error: '' })}
            value={company.company}
            error={company.error}
          />
          <TextField
            placeholder="Phone"
            onChangeText={text => onChangePhone({ phone: text, error: '' })}
            value={phone.phone}
            error={phone.error}
          />
          <TextField
            placeholder="Comment"
            onChangeText={text => onChangeComment({ comment: text, error: '' })}
            value={comment.comment}
            error={comment.error}
          />
        </View>
        <PopUpDropDown
          title={'How Did You Hear About Us'}
          onPress={() => setShowModal(true)}
        />
        <Button
          title="Submit"
          style={{ width: '100%', position: 'absolute', bottom: 0 }}
          onPress={onPressButton}
        />
      </View>
    </ScrollView>
  )
}
export default ContactUs
