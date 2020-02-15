import PropTypes from 'prop-types'

export const checkPatternWithExpressionAndString = (
  regexPattern,
  { firstname, lastname, email }
) => {
  const regex = new RegExp(regexPattern)
  const isValidRegex =
    firstname.match(regex) && lastname.match(regex) && email.match(regex)
  return isValidRegex
}
checkPatternWithExpressionAndString.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}
