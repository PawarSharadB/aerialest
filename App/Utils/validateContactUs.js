export const validateContactUs = ({
  firstName,
  lastName,
  email,
  company,
  phone,
  comment
}) => {
  const emptyNameRegex = new RegExp(/[A-Z]+/)
  const emailRegex = new RegExp(
    /[A-Z0-9a-z.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
  const phoneNumberRegex = new RegExp(
    /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g
  )
  firstName.error =
    firstName.firstName.match(emptyNameRegex) !== null
      ? ''
      : 'Please Enter Valid FirstName'
  lastName.error =
    lastName.lastName.match(emptyNameRegex) !== null
      ? ''
      : 'Please Enter Valid LastName'
  email.error =
    email.email.match(emailRegex) !== null ? '' : 'Please Enter Valid Email'
  company.error =
    company.company.match(emptyNameRegex) !== null
      ? ''
      : 'Please Enter Valid Company'
  phone.error =
    phone.phone.match(phoneNumberRegex) !== null
      ? ''
      : 'Please Enter Valid Phone Number'
  comment.error =
    comment.comment.match(emptyNameRegex) !== null
      ? ''
      : 'Please Enter Valid Comment'
  return { firstName, lastName, email, company, phone, comment }
}
