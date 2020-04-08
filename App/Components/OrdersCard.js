import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Linking } from 'react-native'

import CardView from 'react-native-cardview'
const OrdersCard = props => {
  const { order_id, order_date, amount, status, geo_address, pdf } = props.items
  const getPdfs = item => {
    let ordersArray = []
    for (let i = 0; i < item.length; i++) {
      ordersArray.push(
        <Text style={styles.pdf} onPress={() => Linking.openURL(item[i])}>
          View Orders Pdf
        </Text>
      )
    }
    return ordersArray
  }
  return (
    <View style={styles.cardView}>
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={styles.card}
      >
        <View>
          <Text style={styles.label}>{order_id.label} </Text>
          <Text style={styles.text}>{order_id.value}</Text>
          <Text style={styles.label}>{order_date.label} </Text>
          <Text style={styles.text}>{order_date.value}</Text>
          <Text style={styles.label}>{geo_address.label} </Text>
          {geo_address.value !== null ? (
            <Text style={styles.text}>{geo_address.value} </Text>
          ) : (
            <Text>-</Text>
          )}
          <Text style={styles.label}>{amount.label} </Text>

          {amount.value !== null ? (
            <Text style={styles.text}>{amount.value}</Text>
          ) : (
            <Text>-</Text>
          )}
          <Text style={styles.label}>{status.label}</Text>
          <Text style={styles.text}>{status.value}</Text>
          <Text style={styles.label}>{pdf.label}</Text>
          {pdf.value.length > 0 ? getPdfs(pdf.value) : <Text>No PDF</Text>}
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
    backgroundColor: '#DCDCDC',
    padding: 10
  },
  label: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff'
  },
  text: {
    paddingVertical: 2,
    fontSize: 14
  },
  pdf: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  }
})
