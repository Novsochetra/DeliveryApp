import React, { ReactElement, useState } from 'react'
import {} from 'react-native'
import { Layout } from '../common/Layout'
import { FavoriteView } from './FavoriteView'

type FavoriteScreenProps = {
  screenName: string
}

export const FavoriteScreen = (_: FavoriteScreenProps): ReactElement => {
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
      <FavoriteView
        renderTabItem={renderTabItem}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />
    </Layout>
  )
}
