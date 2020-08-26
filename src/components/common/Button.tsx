import React, { ReactElement } from 'react'
import { Text, TouchableOpacity, StyleProp, ViewStyle, StyleSheet, TextStyle } from 'react-native'
import { StyleGuide } from '../../utils/StyleGuide'

type ButtonProps = {
  label: string
  btnContainerStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  onPress: () => void
}

export const Button = ({
  label,
  onPress,
  btnContainerStyle,
  labelStyle,
}: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity style={[styles.btnContaienr, btnContainerStyle]} onPress={onPress}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContaienr: {
    backgroundColor: StyleGuide.color.primary,
    padding: StyleGuide.paddingMd,
  },

  label: {
    color: '#fff',
  },
})
