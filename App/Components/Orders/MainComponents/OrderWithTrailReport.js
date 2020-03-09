import React from 'react'
import InstantSquareAndTrailReports from '../InstantSquaresAndTrailReports'

const OrderWithTrailReport = props => {
  const { onPress } = props
  return <InstantSquareAndTrailReports onPress={onPress} type="trail" />
}
export default OrderWithTrailReport
