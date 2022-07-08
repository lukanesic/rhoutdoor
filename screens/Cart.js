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

const Wishlist = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        display: 'flex',
      }}
      style={styles.wishListContainer}
      showsVerticalScrollIndicator={false}
    >
      <SavedForLater />
      <UserList />
    </ScrollView>
  )
}

const SavedForLater = () => {
  const [isEmpty, setIsEmpty] = useState(false)

  return (
    <View style={{ height: isEmpty ? 250 : 400 }}>
      <Text style={styles.wishListTitle}>Saved For Later</Text>
      {isEmpty && (
        <WishListEmptyContainer
          description={`You don't have any items pending to buy later`}
        />
      )}

      {!isEmpty && <WishListContent />}

      {/* Ako postoje items u saved later onda je horizontalna flatlist */}
    </View>
  )
}

const UserList = () => {
  const [isEmpty, setIsEmpty] = useState(false)

  return (
    <View style={{ height: isEmpty ? 250 : 400 }}>
      {/* User je dinamicno ne zaboravi */}
      <Text style={styles.wishListTitle}>User List</Text>
      {isEmpty && (
        <WishListEmptyContainer
          description={`There are no items saved in your wishlist`}
        />
      )}

      {!isEmpty && <WishListContent />}
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

// REUSABLE EMPTY CONTAINER COMPONENT
const WishListEmptyContainer = ({ description }) => {
  return (
    <View style={styles.wishListEmptyContainer}>
      <Fontisto name='favorite' size={20} color='black' />
      <Text style={styles.wishListEmptyTitle}>{description}</Text>
    </View>
  )
}

const WishListContent = () => {
  const arr = [0, 1, 3]

  return (
    <View style={styles.wishListContent}>
      <FlatList
        data={arr}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }, index) => <WishCard />}
      />
    </View>
  )
}

const WishCard = () => {
  return (
    <View
      style={{
        width: 130,
        height: '100%',
        marginRight: 10,
        marginTop: 10,
      }}
    >
      <Image
        style={{ backgroundColor: '#cecece', width: '100%', height: '55%' }}
      />
      <View style={styles.wishCardDescription}>
        <Text
          style={{
            fontWeight: '300',
            textTransform: 'uppercase',
            fontSize: 12,
            marginTop: 10,
          }}
        >
          Title
        </Text>
        <Text
          style={{
            fontWeight: '300',
            textTransform: 'uppercase',
            fontSize: 12,
            marginTop: 5,
          }}
        >
          $2.500
        </Text>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.addBtn}
          onPress={() =>
            console.log(
              'Add to bag Func. Odradi suprotan proces od Save for later'
            )
          }
        >
          <Text style={styles.btnText}>Add to bag</Text>
        </TouchableOpacity>
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

  // WISHLIST

  wishListContainer: {
    marginHorizontal: 25,
  },

  wishListTitle: {
    marginTop: 30,
    fontWeight: '500',
  },

  // WISHLISY CONTENT
  wishListContent: {
    flex: 1,
  },
  wishCardDescription: {},
  addBtn: {
    borderWidth: 1,
    borderColor: '#282828',
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginTop: 20,
    width: '75%',
    backgroundColor: '#282828',
  },
  btnText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 10,
    color: '#fff',
  },

  // WISHLIST EMPTY

  wishListEmptyContainer: {
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  wishListEmptyTitle: {
    textAlign: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
    marginTop: 10,
  },

  // SHOPPING BAG

  continueContainer: {
    backgroundColor: '#000',
    marginLeft: -25,
    width: width,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  continueBtn: {},
  continueTxt: {},
  total: {},
})
