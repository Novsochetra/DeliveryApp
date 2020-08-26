import React, { ReactElement } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { StyleGuide } from '../../utils/StyleGuide'

type LayoutProps = {
  loading: boolean
  children: ReactElement
}

export const Layout = ({ children, loading }: LayoutProps): ReactElement => {
  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={StyleGuide.color.primary} />
      </View>
    )

  return children
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
