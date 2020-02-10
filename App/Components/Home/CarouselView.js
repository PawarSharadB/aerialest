import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import Dots from 'react-native-dots-pagination'
import {
  itemHeight,
  styles,
  slideWidth,
  itemWidth
} from '../Styles/Home/CarouselViewStyles'

export default CarouselView = props => {
  const { activeTab, caroselData, setActiveTab } = props

  return (
    <View style={styles.mainView}>
      <Carousel
        scrollEnabled={true}
        sliderWidth={slideWidth}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        data={caroselData}
        renderItem={({ item, index }) => (
          <Image style={styles.imageStyles} source={item} />
        )}
        onSnapToItem={i => setActiveTab(i)}
      />
      <Dots
        length={3}
        active={activeTab}
        activeColor={'#000000'}
        passiveColor={'#EBEBEB'}
        passiveDotWidth={10}
        passiveDotHeight={10}
        activeDotWidth={10}
        activeDotHeight={10}
        alignDotsOnXAxis={true}
      />
    </View>
  )
}
