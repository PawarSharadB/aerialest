import React from 'react'
import InstantSquareAndTrailReports from '../InstantSquaresAndTrailReports'

const OrderWithTrailReport = props => {
  const {
    onPress,
    data: { TrailPrice }
  } = props
  return (
    <InstantSquareAndTrailReports
      onPress={onPress}
      type="trail"
      TrailPrice={TrailPrice}
    />
  )
}
export default OrderWithTrailReport
