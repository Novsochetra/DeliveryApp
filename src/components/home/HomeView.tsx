import React, { ReactElement } from 'react'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import { IProduct } from '../../dummies/favorite.dummies'
import { StyleGuide } from '../../utils/StyleGuide'

type HomeViewProps = {
  favorites: IProduct[]
  renderItem: ({ item, index }: { item: IProduct; index: number }) => ReactElement
}

export const HomeView = ({ favorites, renderItem }: HomeViewProps): ReactElement => {
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item: IProduct) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: StyleGuide.paddingMd,
  },
})
