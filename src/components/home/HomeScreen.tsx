import React, { ReactElement, useState } from 'react'
import {} from 'react-native'
import { Layout } from '../common/Layout'
import { ITabData } from '../common/tab/Tab'
import { HomeView } from './HomeView'
import { PlacesView } from './view/PlacesView'
import { FoodView } from './view/FoodView'

type HomeScreenProps = {
  screenName: string
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

const HomeScreen = (_: HomeScreenProps): ReactElement => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const renderTabItem = ({
    item: { component: TabItemComponent },
  }: {
    item: any
    index: number
  }): ReactElement => {
    return <TabItemComponent />
  }

  return (
    <Layout loading={false}>
      <HomeView
        renderTabItem={renderTabItem}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
        tabs={TAB_DATA}
      />
    </Layout>
  )
}

export default HomeScreen
