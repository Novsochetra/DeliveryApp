import React, { ReactElement, useState, useCallback } from 'react'
import { Layout } from '../common/Layout'
import { favoriteDummies, IProduct } from '../../dummies/favorite.dummies'
import { Card } from '../common/Card'
import { HomeView } from './HomeView'

type HomeScreenProps = {
  screenName: string
}

const HomeScreen = (_: HomeScreenProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, _setLoading] = useState(false)

  const onItemPress = useCallback(() => {
    console.log('ITEM Press')
  }, [])

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
        onItemPress={onItemPress}
      />
    )
  }

  return (
    <Layout loading={loading}>
      <HomeView favorites={favoriteDummies} renderItem={renderItem} />
    </Layout>
  )
}

export default HomeScreen
