import DocumentPicker from 'react-native-document-picker'
export const uploadFile = async callBack => {
  try {
    const response = await DocumentPicker.pick([
      DocumentPicker.types.plainText,
      DocumentPicker.types.pdf
    ])
    callBack(response, null)
  } catch (error) {
    callBack(null, error)
  }
}
