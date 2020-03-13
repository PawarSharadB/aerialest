import PropTypes from 'prop-types'

export const checkPatternWithExpressionAndString = (
  regexPattern,
  { firstName, lastName, address, city, addState, zipCode, country, telephone }
) => {
  const regex = new RegExp(regexPattern)
  const isValidRegex =
    firstName.match(regex) &&
    lastName.match(regex) &&
    address.match(regex) &&
    city.match(regex) &&
    addState.match(regex) &&
    zipCode.match(regex) &&
    country.match(regex) &&
    telephone.match(regex)
  return isValidRegex
}
checkPatternWithExpressionAndString.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  addState: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  telephone: PropTypes.number.isRequired
}
