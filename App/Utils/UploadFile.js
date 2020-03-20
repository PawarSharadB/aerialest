import DocumentPicker from 'react-native-document-picker'
import RNFS from 'react-native-fs'

export const uploadFile = async callBack => {
  try {
    const { uri, name } = await DocumentPicker.pick(
      [DocumentPicker.types.images],
      true
    )
    const data = await RNFS.readFile(uri, 'base64')
    callBack({ data, name }, null)
  } catch (error) {
    console.log(error)
    callBack(null, error)
  }
}
