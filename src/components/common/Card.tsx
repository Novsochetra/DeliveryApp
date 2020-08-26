import React, { ReactElement } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { StyleGuide } from '../../utils/StyleGuide'
import { Button } from './Button'

type CardProps = {
  productName: string
  productImageURL: string
  location: string
  rating: number
  totalRate: number
  isFreeDelivery: boolean
  onItemPress: () => void
}

// eslint-disable-next-line react/display-name
export const Card = React.memo(
  ({
    productName,
    productImageURL,
    location,
    rating,
    totalRate,
    isFreeDelivery,
    onItemPress,
  }: CardProps): ReactElement => {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={onItemPress}>
        <View style={styles.leftWrapper}>
          <Image source={{ uri: productImageURL }} style={styles.productImage} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.productName}>{productName}</Text>
          <Text style={styles.location}>
            <AntDesignIcon name="enviromento" size={20} /> {location}
          </Text>
          <View style={styles.ratingWrapper}>
            <Text>
              <AntDesignIcon name="star" size={20} color="rgb(220, 205, 50)" />️ {rating}{' '}
              <Text style={styles.totalRating}>({totalRate} ratings)</Text>
            </Text>
            {isFreeDelivery && (
              <Button
                label={'Free Delivery'}
                onPress={() => {
                  console.log('Free Delivery')
                }}
                btnContainerStyle={styles.btnContainer}
                labelStyle={styles.label}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
)

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: StyleGuide.marginMd,
    marginHorizontal: StyleGuide.marginSm,
    backgroundColor: StyleGuide.backgroundColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: StyleGuide.paddingMd,
  },

  leftWrapper: {
    marginRight: StyleGuide.marginMd,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },

  productName: {
    fontSize: StyleGuide.fonsizeLg,
    fontWeight: 'bold',
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  ratingWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  location: {
    color: StyleGuide.color.lightgray,
    marginTop: StyleGuide.marginSm,
  },

  totalRating: {
    color: StyleGuide.color.lightgray,
  },

  btnContainer: {
    padding: StyleGuide.paddingSm,
    borderRadius: 20,
  },

  label: {
    fontSize: StyleGuide.fontSizeSm,
  },
})
