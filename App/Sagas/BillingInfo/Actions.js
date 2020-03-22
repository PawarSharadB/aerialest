import {
  BILLING_INFO_DROPDOWN_FAILURE,
  BILLING_INFO_DROPDOWN_SUCCESS,
  BILLING_INFO_DROPDOWN_REQUEST,
  BILLING_INFO_DATA_REQUEST,
  BILLING_INFO_DATA_SUCCESS,
  BILLING_INFO_DATA_FAILURE
} from '../ActionTypes'
export const getBillingInfoDropDown = () => ({
  type: BILLING_INFO_DROPDOWN_REQUEST
})
export const billingInfoSuccess = payload => ({
  type: BILLING_INFO_DROPDOWN_SUCCESS,
  payload
})
export const billingFailure = () => {
  type: BILLING_INFO_DROPDOWN_FAILURE
}
export const billingInfoDataRequest = () => ({
  type: BILLING_INFO_DATA_REQUEST
})
export const billingInfoDataSuccess = payload => ({
  type: BILLING_INFO_DATA_SUCCESS,
  payload
})
export const billingInfoDataFailure = () => ({
  type: BILLING_INFO_DATA_FAILURE
})
