import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import ShoppingBag from '../../components/cart/ShoppingBag'
import Wishlist from '../../components/cart/Wishlist'

import CloseIcon from '../../components/CloseIcon'

export default function CartScreen({ navigation }) {
  const [active, setActive] = useState(0)
  return (
    <View style={styles.container}>
      {/* <CloseIcon
        onPress={() => console.log('Function for closing the modal')}
      /> */}

      <View style={styles.tab}>
        <TouchableOpacity onPress={() => setActive(0)}>
          <Text style={[styles.tabTxt, active === 0 && styles.active]}>
            Shopping Bag
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActive(1)}>
          <Text style={[styles.tabTxt, active === 1 && styles.active]}>
            Wishlist
          </Text>
        </TouchableOpacity>
      </View>

      {active === 0 && <ShoppingBag navigation={navigation} />}
      {active === 1 && <Wishlist />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 100,
    marginLeft: 25,
    marginBottom: 20,
  },
  tabTxt: {
    textTransform: 'uppercase',
    marginRight: 20,
    fontWeight: '400',
    color: '#a2a2a2',
  },
  active: {
    color: '#000',
    fontWeight: '600',
  },
})
