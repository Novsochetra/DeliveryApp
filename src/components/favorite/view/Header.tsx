import React, { ReactElement } from 'react'
import { View, StyleSheet } from 'react-native'
import { Switcher } from '../../common/switcher'

const SWITCHER_DATA = [
  {
    id: `1`,
    label: 'Places',
    onPress: () => {
      console.log(`Active Switch Item ${1}`)
    },
  },
  {
    id: `2`,
    label: 'Food',
    onPress: () => {
      console.log(`Active Switch Item ${2}`)
    },
  },
]

type HeaderProps = {
  setActiveTabIndex: (i: number) => void
}

export const Header = ({ setActiveTabIndex }: HeaderProps): ReactElement => {
  return (
    <View style={styles.headerContainer}>
      <Switcher data={SWITCHER_DATA} activeTab={setActiveTabIndex} />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
