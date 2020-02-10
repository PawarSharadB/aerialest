import PropTypes from 'prop-types'

export const checkPatternWithExpressionAndString = (regexPattern, { name }) => {
  const regex = new RegExp(regexPattern)
  const isValidRegex = name.match(regex)
  return isValidRegex
}
checkPatternWithExpressionAndString.propTypes = {
  name: PropTypes.string.isRequired
}
