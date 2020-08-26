import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Navigation, Options, LayoutComponent } from 'react-native-navigation'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { store } from './state/Store'
import { FavoriteScreen } from './components/favorite/FavoriteScreen'
import { StyleGuide } from './utils/StyleGuide'

export enum IScreenNames {
  SETTING = 'Setting',
  HOME = 'Home',
}

function component(Component: any, _withErrorHandler = true): any {
  class C extends React.Component<any> {
    static get options(): any {
      return Component.options // to suppress flow error
    }

    render(): any {
      return (
        <Provider store={store}>
          <SafeAreaView style={StyleSheet.absoluteFill}>
            {/* TODO: handle with error */}
            {/* {withErrorHandler ? <ErrorHandler componentId={this.props.componentId} /> : null} */}
            <Component {...this.props} />
          </SafeAreaView>
        </Provider>
      )
    }
  }

  return () => C
}

export function registerScreens(): void {
  // https://docs.swmansion.com/react-native-gesture-handler/docs/getting-started.html
  Navigation.registerComponent('Explore', component(gestureHandlerRootHOC(FavoriteScreen)))
  Navigation.registerComponent('MyOrder', component(gestureHandlerRootHOC(FavoriteScreen)))
  Navigation.registerComponent('Favorite', component(gestureHandlerRootHOC(FavoriteScreen)))
  Navigation.registerComponent('Profile', component(gestureHandlerRootHOC(FavoriteScreen)))
}

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

const ExploreComponent: LayoutComponent = {
  name: 'Explore',
  options: {
    bottomTab: { text: 'Explore', icon: require('./assets/icons/home.png') },
  },
}

const MyOrderComponent: LayoutComponent = {
  name: 'MyOrder',
  options: {
    bottomTab: {
      text: 'My Order',
      icon: require('./assets/icons/clipboard.png'),
    },
  },
}

const FavoriteComponent: LayoutComponent = {
  name: 'Favorite',
  options: {
    bottomTab: { text: 'Favorite', icon: require('./assets/icons/radio.png') },
  },
}

const ProfileComponent: LayoutComponent = {
  name: 'Profile',
  options: {
    bottomTab: { text: 'Profile', icon: require('./assets/icons/radio.png') },
  },
}

export function startApp(): void {
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
