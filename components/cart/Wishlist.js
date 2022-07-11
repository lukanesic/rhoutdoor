import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import { Fontisto } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToBagFromWishlist,
  addToSavedForLaterFromStorage,
} from '../../store/cartSlice'

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Wishlist() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchSavedLater = async () => {
      const storedItem = await AsyncStorage.getItem('saved')

      if (storedItem) {
        const savedForLater = JSON.parse(storedItem)
        dispatch(addToSavedForLaterFromStorage(savedForLater))
      }
    }

    fetchSavedLater()
  }, [dispatch])

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
  // REDUX
  const { savedForLater } = useSelector((state) => state.cart)

  return (
    <View
      style={{ height: Object.keys(savedForLater).length === 0 ? 250 : 400 }}
    >
      <Text style={styles.wishListTitle}>Saved For Later</Text>
      {Object.keys(savedForLater).length === 0 && (
        <WishListEmptyContainer
          description={`You don't have any items pending to buy later`}
        />
      )}

      {Object.keys(savedForLater).length !== 0 && (
        <WishListContent savedForLater={savedForLater} />
      )}

      {/* Ako postoje items u saved later onda je horizontalna flatlist */}
    </View>
  )
}

const WishListEmptyContainer = ({ description }) => {
  return (
    <View style={styles.wishListEmptyContainer}>
      <Fontisto name='bookmark' size={20} color={'#000'} />
      <Text style={styles.wishListEmptyTitle}>{description}</Text>
    </View>
  )
}

const WishListContent = ({ savedForLater }) => {
  return (
    <View style={styles.wishListContent}>
      <FlatList
        data={savedForLater}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }, index) => <WishCard item={item} />}
      />
    </View>
  )
}

const WishCard = ({ item }) => {
  const dispatch = useDispatch()
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
        style={{ width: '100%', height: '55%' }}
        source={{ uri: item.images[1] }}
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
          {item.title}
        </Text>
        <Text
          style={{
            fontWeight: '300',
            textTransform: 'uppercase',
            fontSize: 12,
            marginTop: 5,
          }}
        >
          ${item.price}
        </Text>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.addBtn}
          onPress={() => dispatch(addToBagFromWishlist(item))}
        >
          <Text style={styles.btnText}>Add to bag</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const UserList = () => {
  // REDUX
  const { userList } = useSelector((state) => state.cart)

  return (
    <View style={{ height: Object.keys(userList).length === 0 ? 250 : 400 }}>
      {/* User je dinamicno ne zaboravi */}
      <Text style={styles.wishListTitle}>User List</Text>
      {Object.keys(userList).length === 0 && (
        <WishListEmptyContainer
          description={`There are no items saved in your wishlist`}
        />
      )}

      {Object.keys(userList).length !== 0 && <WishListContent />}
    </View>
  )
}

const styles = StyleSheet.create({
  wishListContainer: {
    marginHorizontal: 25,
  },
  wishListTitle: {
    marginTop: 30,
    fontWeight: '500',
  },
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
})
