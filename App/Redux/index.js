import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import ReduxPersist from '../Config/ReduxPersist'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  github: require('./GithubRedux').reducer,
  search: require('./SearchRedux').reducer,
  register: require('../Sagas/register/Reducer').reducer,
  login: require('../Sagas/login/Reducer').reducer,
  profileInfo: require('../Sagas/profile/Reducer').reducer,
  profileUpdate: require('../Sagas/profile/profileUpdateReducer').reducer,
  forgotPassword: require('../Sagas/password/Reducer').reducer,
  placeOrder: require('../Sagas/PlaceOrder/Reducers').reducer,
  order: require('../Sagas/order/Reducer').reducer,
  billingInfo: require('../Sagas/BillingInfo/Reducer').reducer,
  myOrders: require('../Sagas/MyOrders/Reducer').reducer,
  pricing: require('../Sagas/Pricing/Reducer').reducer
})

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return store
}
