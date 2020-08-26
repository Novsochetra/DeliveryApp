/**
 * @format
 */

import { Navigation, Options } from 'react-native-navigation'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import {
  ExploreComponent,
  MyOrderComponent,
  FavoriteComponent,
  ProfileComponent,
  component,
} from './src/App'
import { StyleGuide } from './src/utils/StyleGuide'
import { FavoriteScreen } from './src/components/favorite/FavoriteScreen'

const DefaultNavigationOptions: Options = {
  statusBar: {
    style: 'light',
    backgroundColor: 'lightgreen',
  },
  topBar: {
    title: {
      color: 'white',
    },
    background: {
      color: '#6acdcd',
    },
    backButton: {
      color: 'white',
      title: '',
    },
    drawBehind: false,
    animate: true,
  },
  bottomTabs: {
    animate: true,
    elevation: 6,
  },
  bottomTab: {
    textColor: StyleGuide.color.secondary,
    selectedTextColor: StyleGuide.color.primary,
    iconColor: StyleGuide.color.secondary,
    selectedIconColor: StyleGuide.color.primary,
    fontSize: 12,
  },
  layout: {
    orientation: ['portrait'],
  },
}

function registerScreens(): void {
  // https://docs.swmansion.com/react-native-gesture-handler/docs/getting-started.html
  Navigation.registerComponent('Explore', component(gestureHandlerRootHOC(FavoriteScreen)))
  Navigation.registerComponent('MyOrder', component(gestureHandlerRootHOC(FavoriteScreen)))
  Navigation.registerComponent('Favorite', component(gestureHandlerRootHOC(FavoriteScreen)))
  Navigation.registerComponent('Profile', component(gestureHandlerRootHOC(FavoriteScreen)))
}

function startApp(): void {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions(DefaultNavigationOptions)

    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            { component: ExploreComponent },
            { component: MyOrderComponent },
            { component: FavoriteComponent },
            { component: ProfileComponent },
          ],
          options: {
            bottomTabs: {
              visible: true,
            },
          },
        },
      },
    })
  })
}

registerScreens()
startApp()
