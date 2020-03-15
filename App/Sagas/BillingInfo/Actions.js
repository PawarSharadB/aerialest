import {
  BILLING_INFO_DROPDOWN_FAILURE,
  BILLING_INFO_DROPDOWN_SUCCESS,
  BILLING_INFO_DROPDOWN_REQUEST
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
