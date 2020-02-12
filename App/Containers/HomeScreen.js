import React, { useState } from 'react'
import { SectionList, View, Image, Dimensions, Text } from 'react-native'
import CarouselView from '../Components/Home/CarouselView'
import { Header, Title } from '../Components/Home/HeaderAndTitleComponents'
import { TitleWithImage } from '../Components/Home/TitleWithLeftImage'
import { styles } from './Styles/HomeScreenStyles'
import Images from '../Images'
const resourcesData = require('../Utils/Resources.json')

export default HomeScreen = props => {
  let [activeTab, setActiveTab] = useState(0)
  const data = [
    {
      title: '',
      sectionIndex: 0,
      data: [
        {
          caroselData: [
            Images.carouselOne,
            Images.carouselTwo,
            Images.carouselThree
          ]
        }
      ]
    },
    {
      sectionIndex: 1,
      title: resourcesData.homePage.Aerial_header,
      data: [
        {
          text: resourcesData.homePage.Aerial_desc1
        }
      ]
    },
    {
      sectionIndex: 2,
      title: resourcesData.homePage.Aerial_sub1,
      data: [
        {
          text: resourcesData.homePage.Aerial_sub1_desc
        }
      ]
    },
    {
      sectionIndex: 3,
      title: resourcesData.homePage.Aerial_sub2,
      data: []
    },
    {
      sectionIndex: 4,
      title: resourcesData.homePage.Aerial_sub2_feature_title,
      data: [
        {
          text: resourcesData.homePage.Aerial_sub2_feature1,
          image: Images.sun
        },
        {
          text: resourcesData.homePage.Aerial_sub2_feature2,
          image: Images.sun
        },
        {
          text: resourcesData.homePage.Aerial_sub2_feature3,
          image: Images.sun
        },
        {
          text: resourcesData.homePage.Aerial_sub2_feature4,
          image: Images.sun
        },
        {
          text: resourcesData.homePage.Aerial_sub2_feature5,
          image: Images.sun
        },
        {
          text: resourcesData.homePage.Aerial_sub2_feature6,
          image: Images.sun
        }
      ]
    }
  ]

  const renderItem = data => {
    const {
      item,
      index,
      section: { sectionIndex }
    } = data
    if (sectionIndex == 0) {
      const { caroselData } = item
      return (
        <CarouselView
          activeTab={activeTab}
          caroselData={caroselData}
          setActiveTab={setActiveTab}
        />
      )
    } else if (sectionIndex == 1 || sectionIndex == 2) {
      const { text } = item
      return <Title title={text} />
    } else if (sectionIndex == 3) {
      return null
    } else {
      const { text, image } = item
      return <TitleWithImage text={text} image={image} />
    }
  }
  const renderSectionHeader = ({ section: { sectionIndex, title } }) => {
    if (sectionIndex == 0) {
      return null
    } else {
      return <Header title={title} />
    }
  }
  return (
    <View style={styles.mainView}>
      <SectionList
        style={styles.sectionList}
        sections={data}
        keyExtractor={(item, index) => index}
        renderItem={data => renderItem(data)}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  )
}
