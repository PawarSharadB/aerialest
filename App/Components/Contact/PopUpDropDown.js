import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import CardView from 'react-native-cardview'
import { styles } from '../Styles/Contact/PopUpDropDownStyles'
import Images from '../../Images'

export const PopUpDropDown = props => {
  const { title, onPress } = props
  return (
    <CardView
      cardElevation={3}
      cardMaxElevation={3}
      cornerRadius={5}
      style={{ paddingVertical: 10 }}
    >
      <TouchableOpacity style={styles.mainView} onPress={onPress}>
        <Text style={styles.titleListTile}>{title}</Text>
        <Image source={Images.dropdown} style={styles.image} />
      </TouchableOpacity>
    </CardView>
  )
}
