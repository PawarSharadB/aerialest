import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Button from '../Components/Button'
import HomePage from '../Containers/HomeScreen'
import AboutUs from '../Containers/AboutUs'
import BillingInfo from '../Containers/BillingInfo'
import ContactUs from '../Containers/ContactUs'
import Pricing from '../Containers/Pricing'
import Profile from '../Containers/Profile'
import LaunchScreen from '../Containers/LaunchScreen'
import Login from '../Containers/Login'
import ForgotPassword from '../Containers/ForgotPassword'
import SelectAddress from '../Containers/SelectAddress'
import SearchAddress from '../Containers/SearchAddress'
import Register from '../Components/Register'
import NavBar from '../Components/NavBar'
import NavBackButton from '../Components/NavBackButton'
import SignoutScreen from '../Containers/SignoutScreen'
import PlaceOrder from '../Containers/PlaceOrder'
import ChoosePayment from '../Containers/ChoosePayment'
import PromoCode from '../Containers/PromoCode'

import { View } from 'react-native'
const getNavigationOptions = (navigation, title, showOrder = true) => ({
  title,
  headerLeft: <NavBar navigationProps={navigation} />,
  headerRight: () => {
    return showOrder ? (
      <Button
        style={{
          minWidth: 50,
          backgroundColor: 'white',
          height: 30,
          justifyContent: 'center',
          marginRight: 10
        }}
        textStyle={{
          alignSelf: 'center',
          paddingVertical: 0,
          color: 'black'
        }}
        onPress={() => navigation.navigate('OrdersStack')}
        text="Order"
      />
    ) : (
      <View />
    )
  },
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
const OrdersStack = createStackNavigator(
  {
    SearchAddress: {
      screen: SearchAddress,
      navigationOptions: ({ navigation }) =>
        getNavigationOptions(navigation, 'Search Address', (showOrder = false))
    },
    Orders: {
      screen: SelectAddress,
      navigationOptions: ({ navigation }) =>
        getNavigationOptions(navigation, 'Search Address', (showOrder = false))
    },
    PlaceOrder: {
      screen: PlaceOrder,
      navigationOptions: ({ navigation }) =>
        getNavigationOptions(navigation, 'Place Order', (showOrder = false))
    },
    PromoCode: {
      screen: PromoCode,
      navigationOptions: ({ navigation }) =>
        getNavigationOptions(navigation, 'Promocode', (showOrder = false))
    }
  },
  {
    initialRouteName: 'SearchAddress'
  }
)
const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(navigation, 'Profile')
  }
})
const BillingInfoStack = createStackNavigator(
  {
    BillingInfo: {
      screen: BillingInfo,
      navigationOptions: ({ navigation }) =>
        getNavigationOptions(navigation, 'Billing Details', (showOrder = false))
    },
    ChoosePayment: {
      screen: ChoosePayment,
      navigationOptions: ({ navigation }) =>
        getNavigationOptions(navigation, 'Choose Payment', (showOrder = false))
    }
  },
  {
    initialRouteName: 'BillingInfo'
  }
)
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
const authNavigator = createDrawerNavigator(
  {
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
    OrdersStack: {
      screen: OrdersStack,
      navigationOptions: {
        drawerLabel: 'Orders',
        drawerIcon: <Icon name="thumbs-o-up" size={20} />
      }
    },
    ContactUs: {
      screen: ContactUsStack,
      navigationOptions: {
        drawerLabel: 'Contact Us',
        drawerIcon: <Icon name="envelope" size={20} />
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
    Signout: {
      screen: SignoutScreen,
      navigationOptions: {
        drawerLabel: 'Sign out',
        drawerIcon: <Icon name="power-off" size={20} />
      }
    }
  },
  {
    overlayColor: 'rgba(0, 0, 0, 0.8)'
  }
)
const nonAuthNavigator = createDrawerNavigator(
  {
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
    OrdersStack: {
      screen: OrdersStack,
      navigationOptions: {
        drawerLabel: 'Orders',
        drawerIcon: <Icon name="thumbs-o-up" size={20} />
      }
    },
    BilligInfo: {
      screen: BillingInfoStack,
      navigationOptions: {
        drawerLabel: 'Billing Info',
        drawerIcon: <Icon name="gear" size={20} />
      }
    },
    ContactUs: {
      screen: ContactUsStack,
      navigationOptions: {
        drawerLabel: 'Contact Us',
        drawerIcon: <Icon name="envelope" size={20} />
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
  },
  {
    overlayColor: 'rgba(0, 0, 0, 0.8)'
  }
)
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
