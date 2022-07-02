import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'

import { SimpleLineIcons, AntDesign } from '@expo/vector-icons'
import Card from '../components/Card'

const { height } = Dimensions.get('window')

export default function Cart() {
  const [active, setActive] = useState(0)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close}>
        <AntDesign name='close' size={24} color='black' />
      </TouchableOpacity>

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

      <ScrollView style={styles.contentContainer}>
        <View style={[styles.box1, { backgroundColor: '#000' }]} />
        <View style={[styles.box1, { backgroundColor: '#cecece' }]} />
      </ScrollView>
    </View>
  )
}

const ShoppingBag = () => {
  return (
    <View style={[styles.contentContainer, styles.shoppingContainer]}>
      <SimpleLineIcons name='bag' size={24} color='black' />
      <Text>Your shoping bag is empty</Text>
    </View>
  )
}

const Wishlist = () => {
  return (
    <View style={styles.contentContainer}>
      <SavedForLater />
      <UserList />
    </View>
  )
}

const SavedForLater = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>Saved for later</Text>
      <Text style={styles.boxTxt}>
        You dont have any items pending to buy later
      </Text>
    </View>
  )
}

const UserList = () => {
  const arr = [0, 1]

  return (
    <>
      <View>
        <Text style={styles.boxTitle}>User's list</Text>
        {/* Uslov naravno */}
        {/* <View style={styles.box}>
<Text style={styles.boxTxt}>
        There are not items saved in your wishlist
      </Text>
        </View> */}
      </View>
      <FlatList
        data={arr}
        keyExtractor={(_, index) => index.toString()}
        numColumns='2'
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }, index) => <Card item={item} key={index} />}
        style={{
          backgroundColor: '#000',
          paddingHorizontal: 17,
          paddingTop: 20,
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  close: {
    position: 'absolute',
    top: 50,
    left: 25,
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
