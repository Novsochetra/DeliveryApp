import React, { ReactElement } from 'react'
import { Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { StyleGuide } from '../../../utils/StyleGuide'

type SwitcherItemProps = {
  label: string
  itemContainerStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  active: boolean
  onPress: () => void
}

export const SwitcherItem = React.memo(
  ({ active, label, itemContainerStyle, labelStyle, onPress }: SwitcherItemProps): ReactElement => {
    const activeStyle = active ? styles.activeSwitcherItem : styles.disactiveSwitcherItem
    const activeLabelStyle = active ? styles.activeLabel : styles.disactiveLabel

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.itemContainerStyle, itemContainerStyle, activeStyle]}
      >
        <Text style={[styles.switcherLabel, labelStyle, activeLabelStyle]}>{label}</Text>
      </TouchableOpacity>
    )
  }
)

const styles = StyleSheet.create({
  itemContainerStyle: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  activeSwitcherItem: {
    backgroundColor: StyleGuide.color.primary,
  },

  disactiveSwitcherItem: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  switcherLabel: {
    fontWeight: 'bold',
  },

  activeLabel: {
    color: 'white',
  },

  disactiveLabel: {
    color: 'gray',
  },
})
