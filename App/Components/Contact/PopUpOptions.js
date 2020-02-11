import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { styles } from '../Styles/Contact/PopUpOptions'
import Images from '../../Images'

export const PopUpOptions = props => {
  const { isSelected, onPressTile, title } = props
  return (
    <TouchableOpacity
      style={styles.listViewComponent}
      onPress={onPressTile}
      activeOpacity={0}
    >
      <Text style={styles.titleListTile}>{title}</Text>
      <Image
        source={isSelected ? Images.select : Images.unSelect}
        style={styles.image}
      />
    </TouchableOpacity>
  )
}
