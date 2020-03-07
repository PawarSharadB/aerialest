import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextField, OutlinedTextField } from 'react-native-material-textfield'

import PromoCodeCard from '../Components/PromoCodeCard'
import I18n from '../I18n'

import { styles } from './Styles/PromoCodeStyles'
import Button from '../Components/Button'

const PromoCode = props => {
  const [promocode, setPromocode] = useState('')
  const [inputError, setInputError] = useState(null)
  let promocodeField = null
  const onApplyPress = () => {}
  const onSkipPress = () => {}
  return (
    <View style={styles.mainView}>
      <PromoCodeCard />
      <View style={styles.promocodeInput}>
        <OutlinedTextField
          label={I18n.t('promocode')}
          ref={ref => (promocodeField = ref)}
          value={promocode}
          onChangeText={promocode => {
            setInputError('')
            setPromocode(promocode)
          }}
          error={promocode ? '' : inputError}
        />
      </View>
      <View style={styles.buttonsView}>
        <Button
          onPress={onApplyPress}
          style={[styles.button, styles.applyButton]}
          textStyle={styles.btnTextStyle}
          text={'Apply'}
        />
        <Button
          onPress={onSkipPress}
          style={[styles.skipButton, styles.button]}
          textStyle={styles.btnTextStyle}
          text={'Skip'}
        />
      </View>
    </View>
  )
}

export default PromoCode
