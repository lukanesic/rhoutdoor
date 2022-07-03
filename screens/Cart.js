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

import { SimpleLineIcons, AntDesign } from '@expo/vector-icons'

import { Fontisto } from '@expo/vector-icons'

const { height, width } = Dimensions.get('window')

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

      {active === 0 && <ShoppingBag />}
      {active === 1 && <Wishlist />}
    </View>
  )
}

const ShoppingBag = () => {
  const [isEmpty, setIsEmpty] = useState(false)

  return (
    // SHOPING BAG se deli na dva dela, dva state-a.
    // Ako nesto postoji u Shopping bag, i ako ne postoji
    // To zavisi od redux-a, ali sad cu samo da imitiram to ponasanje
    <View style={styles.shoppingBagContainer}>
      {isEmpty && <EmptyBag />}
      {!isEmpty && <BagItems />}
    </View>
  )
}

const EmptyBag = () => {
  return (
    <View style={styles.emptyBagContainer}>
      <SimpleLineIcons name='bag' size={24} color='black' />
      <Text style={{ marginTop: 10, fontWeight: '200' }}>
        Your shoping bag is empty
      </Text>
    </View>
  )
}

const BagItems = () => {
  const arr = [0, 1, 2, 3]

  return (
    <>
      <View style={styles.bagItemsContainer}>
        <FlatList
          data={arr}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }, index) => (
            <BagProductCard item={item} key={index} />
          )}
        />

        <TotalContinue />
      </View>
    </>
  )
}

const BagProductCard = () => {
  return (
    <View style={styles.bagProductCardContainer}>
      <Text style={styles.productTitle}>Product name</Text>
      <View style={styles.productCard}>
        <Image
          style={{ width: 200, height: 300, backgroundColor: '#cecece' }}
        />
        <View style={styles.productCardDescription}>
          <Text style={styles.productCartTxt}>Price</Text>
          <View>
            <TouchableOpacity onPress={() => console.log('Delete Function')}>
              <Text style={styles.productCartTxt}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                console.log(
                  'Save, transfer to Wishlist/Saved for later and remove from Shopping bag '
                )
              }
            >
              <Text style={[styles.productCartTxt, { marginTop: 20 }]}>
                Save for later
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  shoppingBagContainer: {
    flex: 1,
    marginHorizontal: 25,
  },

  emptyBagContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bagItemsContainer: {
    flex: 1,
  },

  bagProductCardContainer: {
    marginVertical: 20,
  },
  productTitle: {
    marginVertical: 10,
    textTransform: 'uppercase',
    fontSize: 11,
    fontWeight: '600',
  },
  productCard: {
    display: 'flex',
    flexDirection: 'row',
  },
  productCardDescription: {
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  productCartTxt: {
    fontWeight: '300',
    textTransform: 'uppercase',
    fontSize: 12,
  },
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
