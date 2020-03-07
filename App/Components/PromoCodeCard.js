import React from 'react'
import { View, Text } from 'react-native'
import CardView from 'react-native-cardview'

import styles from './Styles/PromoCodeCardStyles'

const PromoCodeCard = ({ price = 0.0, discount = 0.0, finalPrice = 0.0 }) => {
  return (
    <View>
      <CardView
        cardElevation={5}
        cardMaxElevation={15}
        cornerRadius={5}
        style={styles.card}
      >
        <View>
          <Text styles={styles.title}>Price Information</Text>
          <Text style={styles.text}>{`Price: $${price}`}</Text>
          <Text style={styles.text}>{`Discount: $${discount}`}</Text>
          <Text style={styles.text}>{`Final Price: $${finalPrice}`}</Text>
        </View>
      </CardView>
    </View>
  )
}
export default PromoCodeCard
