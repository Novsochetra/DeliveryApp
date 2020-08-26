import React, { ReactElement, useState, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { SwitcherItem } from './switcherItem'

export type ISwitcherData = Array<{
  id: string
  label: string
  onPress: () => void
}>

type SwitcherProps = {
  data: ISwitcherData
  activeTab?: (v: number) => void
}

// eslint-disable-next-line react/display-name
export const Switcher = React.memo(
  ({ data, activeTab }: SwitcherProps): ReactElement => {
    const [activeIndex, setActiveIndex] = useState(0)

    const activeTabCallback = useCallback((index: number) => {
      activeTab?.(index)
      setActiveIndex(index)
    }, [])

    return (
      <View style={styles.container}>
        {data.map((item, i) => {
          return (
            <SwitcherItem
              key={`switchItem${item.id}`}
              active={activeIndex === i}
              onPress={() => {
                activeTabCallback(i)
              }}
              label={item.label}
            />
          )
        })}
      </View>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 250,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'row',
  },
})
