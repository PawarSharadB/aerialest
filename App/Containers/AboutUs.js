import React from 'react'
import { View, SectionList, Image, Dimensions } from 'react-native'
import Images from '../Images'
import { Title } from '../Components/Home/HeaderAndTitleComponents'
import { Header } from '../Components/Home/HeaderAndTitleComponents'
const aboutUsPage = require('../Utils/Resources.json').aboutUsPage

const AboutUs = (props) => {
  const dataSource = [
    {
      title: '',
      sectionIndex: 0,
      data: [
        {
          image: Images.aboutUsImage
        }
      ]
    },
    {
      title: '',
      sectionIndex: 1,
      data: [
        {
          text: aboutUsPage.Aerialdesc
        }
      ]
    },
    {
      title: aboutUsPage.Aerial_sub1,
      sectionIndex: 2,
      data: [
        {
          text: aboutUsPage.Aerial_sub1_desc
        }
      ]
    }
  ]
  const renderItem = (data) => {
    const {
      item,
      index,
      section: { sectionIndex }
    } = data
    if (sectionIndex == 0) {
      return (
        <Image
          style={{ width: '100%', resizeMode: 'stretch' }}
          source={Images.aboutUsImage}
        />
      )
    } else {
      const { text } = item
      return <Title title={text} style={{ paddingVertical: 10 }} />
    }
  }
  const renderSectionHeader = ({ section: { sectionIndex, title } }) => {
    if (sectionIndex == 0 || sectionIndex == 1) {
      return null
    } else {
      return <Header title={title} />
    }
  }
  return (
    <SectionList
      sections={dataSource}
      keyExtractor={(item, index) => index}
      renderItem={(data) => renderItem(data)}
      renderSectionHeader={renderSectionHeader}
    />
  )
}
export default AboutUs
