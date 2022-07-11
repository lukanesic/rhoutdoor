import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native'
import React, { useState } from 'react'

import { Fontisto } from '@expo/vector-icons'
import CloseIcon from '../components/CloseIcon'

import ShoppingBag from '../components/cart/ShoppingBag'
import Wishlist from '../components/cart/Wishlist'

const { height, width } = Dimensions.get('window')

export default function Cart() {
  const [active, setActive] = useState(0)

  return (
    <View style={styles.container}>
      <CloseIcon
        onPress={() => console.log('Function for closing the modal')}
      />

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

      {active === 0 && <ShoppingBag />}
      {active === 1 && <Wishlist />}
    </View>
  )
}

const TotalContinue = () => {
  return (
    <View style={styles.continueContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          borderWidth: 1,
          borderColor: '#fff',
          padding: 12,
          width: 140,
          backgroundColor: '#fff',
        }}
        onPress={() =>
          console.log('Navigate to checkout or address. Kao i kod njih')
        }
      >
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontSize: 12,
            fontWeight: '600',
            textTransform: 'uppercase',
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>

      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: '600',
            textTransform: 'uppercase',
            fontSize: 12,
          }}
        >
          Total $2,000
        </Text>
        <Text
          style={{
            color: '#cecece',
            fontWeight: '300',
            fontSize: 10,
            textAlign: 'right',
          }}
        >
          No tax included
        </Text>
      </View>
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
  contentContainer: {
    borderWidth: 1,
    borderColor: '#000',
    height: height,
  },

  box1: {
    height: height / 2 - 100,
  },
})
