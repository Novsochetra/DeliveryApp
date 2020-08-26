import React, { ReactElement, useRef, useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'

export type ITabData = Array<{
  id: string
  onPress?: () => void
  component: () => ReactElement
}>

export type TabProps = {
  initialIndex: number
  data: ITabData
  renderTabItem: ({ item, index }: { item: any; index: number }) => ReactElement
}

export const Tab = React.memo(
  ({ initialIndex, data, renderTabItem }: TabProps): ReactElement => {
    const tabRef = useRef<FlatList>(null)

    useEffect(() => {
      if (tabRef.current) {
        tabRef.current.scrollToIndex({ index: initialIndex, animated: true })
      }
    }, [initialIndex])

    return (
      <FlatList
        ref={tabRef}
        data={data}
        renderItem={renderTabItem}
        keyExtractor={(_item: any, index: number) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        // scrollEnabled={false}
        removeClippedSubviews
        nestedScrollEnabled
        pagingEnabled
        horizontal
      />
    )
  }
)

const styles = StyleSheet.create({
  contentContainerStyle: {
    // flex: 1,
    // backgroundColor: 'blue',
  },
})
