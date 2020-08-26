import React, { ReactElement } from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import { StyleGuide } from '../../../utils/StyleGuide'

const SCREEN_WIDTH = Dimensions.get('window').width

export const FoodView = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Food View</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: StyleGuide.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
