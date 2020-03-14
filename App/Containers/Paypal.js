import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import { WebView } from 'react-native-webview'
import axios from 'axios'
import qs from 'qs'
import { decode, encode } from 'base-64'

const Paypal = props => {
  const currency = props.navigation.state.params.price
  const [isWebViewLoading, SetIsWebViewLoading] = useState(false)
  const [paypalUrl, setPaypalUrl] = useState('')
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    if (!global.btoa) {
      global.btoa = encode
    }

    if (!global.atob) {
      global.atob = decode
    }
  }, [])

  const [shouldShowWebViewLoading, setShouldShowWebviewLoading] = useState(true)

  const buySomething = async () => {
    const dataDetail = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      transactions: [
        {
          amount: {
            currency: 'USD',
            total: `${currency}`,
            details: {
              shipping: '6',
              subtotal: '20',
              shipping_discount: '0',
              insurance: '0',
              handling_fee: '0',
              tax: '0'
            }
          },
          description: 'This is the payment transaction description',
          payment_options: {
            allowed_payment_method: 'IMMEDIATE_PAY'
          },
          item_list: {
            items: [
              {
                name: 'Book',
                description: 'Chasing After The Wind',
                quantity: '1',
                price: '20',
                tax: '0',
                sku: 'product34',
                currency: 'USD'
              }
            ]
          }
        }
      ],
      redirect_urls: {
        return_url: 'https://example.com/',
        cancel_url: 'https://example.com/'
      }
    }

    const url = `https://api.sandbox.paypal.com/v1/oauth2/token`

    const data = {
      grant_type: 'client_credentials'
    }

    const auth = {
      username:
        'AQBE9hMVAvTF-swaPyFT3saZnYsnp7-gp97xueg84nBucZRRGYt2ka2nNqJBsvE8KBw2FmrH52SX_dYD', //"your_paypal-app-client-ID",
      password:
        'EChOpwZkcypi_tMdCsg9-DiVeV6mtWqSuA5DHp7tuX2FgiZOONsWaKaJRtdL3Juq2jm8AqW9gr2a-Ar4' //"your-paypal-app-secret-ID
    }

    const options = {
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Credentials': true
      },

      //Make sure you use the qs.stringify for data
      data: qs.stringify(data),
      auth: auth,
      url
    }

    // Authorise with seller app information (clientId and secret key)
    axios(options)
      .then(response => {
        setAccessToken(response.data.access_token)

        //Resquest payal payment (It will load login page payment detail on the way)
        axios
          .post(
            `https://api.sandbox.paypal.com/v1/payments/payment`,
            dataDetail,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${response.data.access_token}`
              }
            }
          )
          .then(response => {
            const { id, links } = response.data
            const approvalUrl = links.find(data => data.rel == 'approval_url')
              .href

            console.log('response', links)
            setPaypalUrl(approvalUrl)
          })
          .catch(err => {
            console.log({ ...err })
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  /*---End Paypal checkout section---*/

  onWebviewLoadStart = () => {
    if (shouldShowWebViewLoading) {
      SetIsWebViewLoading(true)
    }
  }

  _onNavigationStateChange = webViewState => {
    console.log('webViewState', webViewState)

    //When the webViewState.title is empty this mean it's in process loading the first paypal page so there is no paypal's loading icon
    //We show our loading icon then. After that we don't want to show our icon we need to set setShouldShowWebviewLoading to limit it
    if (webViewState.title == '') {
      //When the webview get here Don't need our loading anymore because there is one from paypal
      setShouldShowWebviewLoading(false)
    }

    if (webViewState.url.includes('https://example.com/')) {
      setPaypalUrl(null)
      const urlArr = webViewState.url.split(/(=|&)/)

      const paymentId = urlArr[2]
      const payerId = urlArr[10]

      axios
        .post(
          `https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`,
          { payer_id: payerId },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        .then(response => {
          setShouldShowWebviewLoading(true)
          props.navigation.navigate('PaypalSuccess')
        })
        .catch(err => {
          setShouldShowWebviewLoading(true)
        })
    }
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text>Paypal in React Native</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={buySomething}
          style={styles.btn}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: '400',
              textAlign: 'center',
              color: '#ffffff',
              marginTop: 10
            }}
          >
            BUY NOW
          </Text>
        </TouchableOpacity>
      </View>
      {paypalUrl ? (
        <View style={styles.webview}>
          <WebView
            style={{ height: '100%', width: '100%' }}
            source={{ uri: paypalUrl }}
            onNavigationStateChange={this._onNavigationStateChange}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={false}
            onLoadStart={onWebviewLoadStart}
            onLoadEnd={() => SetIsWebViewLoading(false)}
          />
        </View>
      ) : null}
      {isWebViewLoading ? (
        <View
          style={{
            ...StyleSheet.absoluteFill,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff'
          }}
        >
          <ActivityIndicator size="small" color="#A02AE0" />
        </View>
      ) : null}
    </React.Fragment>
  )
}

export default Paypal

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  webview: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#61E786',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
})