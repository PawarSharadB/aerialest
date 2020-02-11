import PropTypes from 'prop-types'

export const checkPatternWithExpressionAndString = (
  regexPattern,
  { email, password }
) => {
  const regex = new RegExp(regexPattern)
  const isValidRegex = email.match(regex) && password.match(regex)
  return isValidRegex
}
checkPatternWithExpressionAndString.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}
