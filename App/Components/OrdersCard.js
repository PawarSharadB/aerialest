import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import CardView from 'react-native-cardview'

const OrdersCard = props => {
  return (
    <View style={styles.cardView}>
      <CardView
        cardElevation={1}
        cardMaxElevation={1}
        cornerRadius={5}
        style={styles.card}
      >
        <View>
          <Text style={styles.text}>Order #:</Text>

          <Text style={styles.text}>Date :</Text>

          <Text style={styles.text}>Address :</Text>
          <Text style={styles.text}>Order Total: </Text>
          <Text style={styles.text}>Status: </Text>
          <Text style={styles.text}>Action: </Text>
        </View>
      </CardView>
    </View>
  )
}
export default OrdersCard

const styles = StyleSheet.create({
  cardView: {
    marginTop: 10,
    marginHorizontal: 10
  },
  card: {
    backgroundColor: '#f59c42',
    padding: 10
  },
  text: {
    color: '#fff',
    fontSize: 18
  }
})
