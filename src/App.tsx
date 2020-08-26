import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { LayoutComponent } from 'react-native-navigation'
import { store } from './state/Store'

export enum IScreenNames {
  SETTING = 'Setting',
  HOME = 'Home',
}

export function component(Component: any, _withErrorHandler = true): any {
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

export const ExploreComponent: LayoutComponent = {
  name: 'Explore',
  options: {
    bottomTab: { text: 'Explore', icon: require('./assets/icons/home.png') },
  },
}

export const MyOrderComponent: LayoutComponent = {
  name: 'MyOrder',
  options: {
    bottomTab: {
      text: 'My Order',
      icon: require('./assets/icons/clipboard.png'),
    },
  },
}

export const FavoriteComponent: LayoutComponent = {
  name: 'Favorite',
  options: {
    bottomTab: { text: 'Favorite', icon: require('./assets/icons/radio.png') },
  },
}

export const ProfileComponent: LayoutComponent = {
  name: 'Profile',
  options: {
    bottomTab: { text: 'Profile', icon: require('./assets/icons/radio.png') },
  },
}
