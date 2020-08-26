import React, { ReactElement } from 'react'
import { FlatList, StyleSheet, View, Dimensions } from 'react-native'
import { Card } from '../../common/Card'
import { IProduct, favoriteDummies } from '../../../dummies/favorite.dummies'
import { StyleGuide } from '../../../utils/StyleGuide'

export const PlacesView = (): ReactElement => {
  const renderItem = ({ item: product }: { item: IProduct; index: number }): ReactElement => {
    return (
      <Card
        key={`favoriteCard${product.id}`}
        productName={product.productName}
        productImageURL={product.productImage}
        location={product.location}
        rating={product.rating}
        totalRate={product.totalRate}
        isFreeDelivery={product.isFreeDelivery}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteDummies}
        renderItem={renderItem}
        keyExtractor={(item: IProduct) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cotentContainerStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
  },

  cotentContainerStyle: {
    paddingHorizontal: StyleGuide.paddingMd,
  },
})
