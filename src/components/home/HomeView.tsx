import React, { ReactElement } from 'react'
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions } from 'react-native'
import { Tab, ITabData } from '../common/tab/Tab'
import { Header } from './view/Header'

type HomeViewProps = {
  tabs: ITabData
  activeTabIndex: number
  setActiveTabIndex: (i: number) => void
  renderTabItem: ({ item, index }: { item: any; index: number }) => ReactElement
}

export const HomeView = ({
  tabs,
  activeTabIndex,
  renderTabItem,
  setActiveTabIndex,
}: HomeViewProps): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header setActiveTabIndex={setActiveTabIndex} />
        <Tab initialIndex={activeTabIndex} data={tabs} renderTabItem={renderTabItem} />
      </View>
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
