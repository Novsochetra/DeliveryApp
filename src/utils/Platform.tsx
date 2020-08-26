import { Dimensions, Platform, StatusBar } from 'react-native'

export function isIphoneX(): boolean {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812 || dimen.height === 896 || dimen.width === 896)
  )
}

export const getStatusbarHeight = (): number => {
  if (Platform.OS === 'android') return StatusBar.currentHeight ?? 0
  else {
    if (isIphoneX()) {
      return 44
    }
    return 5
  }
}
