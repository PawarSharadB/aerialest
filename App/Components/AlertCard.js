import React from 'react'
import { View, Text } from 'react-native'
import CardView from 'react-native-cardview'

import styles from './Styles/AlertCardStyles'

const AlertCard = ({ message }) => {
  return (
    <View style={styles.cardView}>
      <CardView
        cardElevation={1}
        cardMaxElevation={1}
        cornerRadius={5}
        style={styles.card}
      >
        <View>
          <Text style={styles.text}>{message}</Text>
        </View>
      </CardView>
    </View>
  )
}
export default AlertCard
