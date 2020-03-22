import React from 'react'
import { View, Text, Linking } from 'react-native'
import CardView from 'react-native-cardview'

import I18n from '../I18n'

import styles from './Styles/SingleOrderStyles'
import Button from './Button'

const SingleOrder = props => {
  const {
    title,
    price,
    sub1,
    sub2,
    sub3,
    sub4,
    sub5,
    pdftitle,
    pdfURL,
    onOrderSelect
  } = props
  const FlatListItemSeparator = () => {
    return <View style={styles.grayLine} />
  }
  return (
    <View style={styles.cardView}>
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={styles.card}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{`$${price}`}</Text>
        {FlatListItemSeparator()}
        <Text style={styles.subTitle}>{sub1}</Text>
        {FlatListItemSeparator()}
        <Text style={styles.subTitle}>{sub2}</Text>
        {FlatListItemSeparator()}
        <Text style={styles.subTitle}>{sub3}</Text>
        {FlatListItemSeparator()}
        <Text style={styles.subTitle}>{sub4}</Text>
        {FlatListItemSeparator()}
        <Text style={styles.subTitle}>{sub5}</Text>
        {FlatListItemSeparator()}
        <Text
          style={[
            styles.subTitle,
            {
              fontWeight: 'bold',
              fontStyle: 'italic',
              textDecorationLine: 'underline'
            }
          ]}
          onPress={() => Linking.openURL(pdfURL)}
        >{`Sample ${title} PDF`}</Text>
        {FlatListItemSeparator()}
        <Button
          text={I18n.t('order')}
          onPress={price => onOrderSelect(price)}
          textStyle={styles.commonTextStyle}
          style={styles.commonButton}
          addShadow={true}
        />
      </CardView>
    </View>
  )
}
export default SingleOrder
