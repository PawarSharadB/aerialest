import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage'
import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomePage from '../Containers/HomeScreen'
import AboutUs from '../Containers/AboutUs'
import BillingInfo from '../Containers/BillingInfo'
import ContactUs from '../Containers/ContactUs'
import Orders from '../Containers/Orders'
import Pricing from '../Containers/Pricing'
import Profile from '../Containers/Profile'
import LaunchScreen from '../Containers/LaunchScreen'

import Login from '../Containers/Login'
import ForgotPassword from '../Containers/ForgotPassword'

import { SelectAddress } from '../Containers/SelectAddress'
import Register from '../Components/Register'
import NavBar from '../Components/NavBar'
import NavBackButton from '../Components/NavBackButton'

import { View } from 'react-native'
const getNavigationOptions = (navigation, title) => ({
  title,
  headerLeft: <NavBar navigationProps={navigation} />,
  headerStyle: {
    backgroundColor: '#0485B2'
  },
  headerTintColor: '#fff'
})
const getNavigationOptionsWithBackButton = (navigation, title) => ({
  title,
  headerLeft: <NavBackButton navigationProps={navigation} />,
  headerStyle: {
    backgroundColor: '#0485B2'
  },
  headerTintColor: '#fff'
})

const SignoutScreen = props => {
  useEffect(() => {
    clear()
  }, [])
  const clear = async () => {
    await AsyncStorage.clear()
    props.navigation.navigate('Starter')
  }
  return <View />
}
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
      getNavigationOptions(navigation, 'Contact')
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
const SelectAddressStack = createStackNavigator({
  SelectAddress: {
    screen: SelectAddress,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'Select Address')
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
  },
  forgotPassword: {
    screen: ForgotPassword,
    navigationOptions: ({ navigation }) =>
      getNavigationOptionsWithBackButton(navigation, 'Reset Password')
  }
})

const authNavigator = createDrawerNavigator({
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
      drawerLabel: 'Contact',
      drawerIcon: <Icon name="email" size={20} />
    }
  },
  SelectAddressStack: {
    screen: SelectAddressStack,
    navigationOptions: {
      drawerLabel: 'Select Address',
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
  Signout: {
    screen: SignoutScreen,
    navigationOptions: {
      drawerLabel: 'Signout',
      drawerIcon: <Icon name="sign-out" size={20} />
    }
  }
})
const nonAuthNavigator = createDrawerNavigator({
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
      drawerLabel: 'Contact',
      drawerIcon: <Icon name="email" size={20} />
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

//export default createAppContainer(drawerNavigator)

export default createAppContainer(
  createSwitchNavigator(
    {
      Starter: LaunchScreen,
      App: nonAuthNavigator,
      Auth: authNavigator
    },
    {
      initialRouteName: 'Starter'
    }
  )
)
