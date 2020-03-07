import { PermissionsAndroid } from 'react-native'
export async function geoPermissions() {
  try {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
    return granted
    // eslint-disable-next-line no-empty
  } catch (err) {
    return err
  }
}
