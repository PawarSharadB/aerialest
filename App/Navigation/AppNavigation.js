import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomePage from '../Containers/HomeScreen'
import AboutUs from '../Containers/AboutUs'
import BillingInfo from '../Containers/BillingInfo'
import ContactUs from '../Containers/ContactUs'
import Orders from '../Containers/Orders'
import Pricing from '../Containers/Pricing'
import Profile from '../Containers/Profile'
import Login from '../Containers/Login'

import Register from '../Components/Register'
import NavBar from '../Components/NavBar'
import Images from '../Images'
import { View } from 'react-native'
const getNavigationOptions = (navigation, title) => ({
  title,
  headerLeft: <NavBar navigationProps={navigation} />,
  headerStyle: {
    backgroundColor: '#0485B2'
  },
  headerTintColor: '#fff'
})
const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomePage,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'Home')
  }
})
const AboutUsStack = createStackNavigator({
  AboutUs: {
    screen: AboutUs,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'AboutUs')
  }
})
const PricingStack = createStackNavigator({
  Pricing: {
    screen: Pricing,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'Pricing')
  }
})
const ContactUsStack = createStackNavigator({
  ContactUs: {
    screen: ContactUs,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'ContactUs')
  }
})
const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'Profile')
  }
})
const BillingInfoStack = createStackNavigator({
  BillingInfo: {
    screen: BillingInfo,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'BillingInfo')
  }
})
const OrdersStack = createStackNavigator({
  Orders: {
    screen: Orders,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'Orders')
  }
})
const RegisterStack = createStackNavigator({
  RegisterInfo: {
    screen: Register,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'Register')
  }
})
const LoginStack = createStackNavigator({
  LoginInfo: {
    screen: Login,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'Sign In')
  }
})
const drawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: <Icon name="home" size={20} />
    }
  },
  AboutUs: {
    screen: AboutUsStack,
    navigationOptions: {
      drawerLabel: 'About Us',
      drawerIcon: <Icon name="flag" size={20} />
    }
  },
  Pricing: {
    screen: PricingStack,
    navigationOptions: {
      drawerLabel: 'Pricing',
      drawerIcon: <Icon name="tags" size={20} />
    }
  },
  ContactUs: {
    screen: ContactUsStack,
    navigationOptions: {
      drawerLabel: 'Contact Us',
      drawerIcon: <Icon name="email" size={20} />
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: <Icon name="gear" size={20} />
    }
  },
  BilligInfo: {
    screen: BillingInfoStack,
    navigationOptions: {
      drawerLabel: 'Billing Info',
      drawerIcon: <Icon name="gear" size={20} />
    }
  },
  Orders: {
    screen: OrdersStack,
    navigationOptions: {
      drawerLabel: 'Orders',
      drawerIcon: <Icon name="like1" size={20} />
    }
  },
  Login: {
    screen: LoginStack,
    navigationOptions: {
      drawerLabel: 'Sign In',
      drawerIcon: <Icon name="paper-plane-o" size={20} />
    }
  },
  Register: {
    screen: RegisterStack,
    navigationOptions: {
      drawerLabel: 'Register',
      drawerIcon: <Icon name="user-plus" size={20} />
    }
  }
})

export default createAppContainer(drawerNavigator)
