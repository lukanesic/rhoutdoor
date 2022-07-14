import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import TotalPayCard from './TotalPayCard'

export default function TotalToPay() {
  const { cart, cartTotalQuantity } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.user)

  return (
    <View style={styles.container}>
      <Text style={styles.itemQty}>
        {cartTotalQuantity} {`${cartTotalQuantity > 1 ? 'Items' : 'Item'}`}
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }, index) => <TotalPayCard item={item} />}
      />

      <View>
        <Text>
          {user.name} {user.surname}
        </Text>
        <View>
          <Text>{user.address}</Text>
          <Text>
            {user.city}, {user.postal}
          </Text>
          <Text>{user.country}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#282828',
    marginTop: 120,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  itemQty: {
    textTransform: 'uppercase',
    fontWeight: '500',
  },
})
