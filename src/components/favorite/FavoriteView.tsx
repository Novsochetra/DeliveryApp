import React, { ReactElement } from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions } from 'react-native'
import { Tab, ITabData } from '../common/tab/Tab'
import { Header } from './view/Header'
import { PlacesView } from './view/PlacesView'
import { FoodView } from './view/FoodView'

type FavoriteViewProps = {
  activeTabIndex: number
  setActiveTabIndex: (i: number) => void
  renderTabItem: ({ item, index }: { item: any; index: number }) => ReactElement
}

const TAB_DATA: ITabData = [
  {
    id: 'Place',
    onPress: () => {
      console.log('Go To Place Screen')
    },
    component: () => <PlacesView />,
  },
  {
    id: 'Food',
    onPress: () => {
      console.log('Go To Food Screen')
    },
    component: () => <FoodView />,
  },
]

export const FavoriteView = ({
  activeTabIndex,
  renderTabItem,
  setActiveTabIndex,
}: FavoriteViewProps): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Header setActiveTabIndex={setActiveTabIndex} />
      <Tab initialIndex={activeTabIndex} data={TAB_DATA} renderTabItem={renderTabItem} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
