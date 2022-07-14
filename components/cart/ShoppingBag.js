import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native'
import React, { useEffect } from 'react'

import { SimpleLineIcons, AntDesign } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToCartFromStorageSuccess,
  addToCartFromStorageRequest,
  addToSavedForLater,
  getTotal,
  removeFromCart,
} from '../../store/cartSlice'

import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../Loading'

const { height, width } = Dimensions.get('window')

export default function ShoppingBag({ navigation }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCartitem = async () => {
      dispatch(addToCartFromStorageRequest())
      const storedCartitem = await AsyncStorage.getItem('cartItem')

      if (storedCartitem) {
        const cartItem = JSON.parse(storedCartitem)
        dispatch(addToCartFromStorageSuccess(cartItem))
      }
    }

    fetchCartitem()
  }, [dispatch])

  const { cart, loading } = useSelector((state) => state.cart)

  if (loading) {
    return <Loading bg={'#fff'} color={'#000'} marginTop={0} />
  }

  return (
    <View style={styles.shoppingBagContainer}>
      {Object.keys(cart).length === 0 && <EmptyBag />}
      {cart && <BagItems cart={cart} navigation={navigation} />}
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

const BagItems = ({ cart, navigation }) => {
  return (
    <>
      <View style={styles.bagItemsContainer}>
        <FlatList
          data={cart}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }, index) => (
            <BagProductCard item={item} key={index} />
          )}
        />

        {Object.keys(cart).length !== 0 && (
          <TotalContinue cart={cart} navigation={navigation} />
        )}
      </View>
    </>
  )
}

const BagProductCard = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.bagProductCardContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <View style={styles.productCard}>
        <Image
          style={{ width: 200, height: 300 }}
          source={{ uri: item.images[1] }}
        />
        <View style={styles.productCardDescription}>
          <View>
            <Text style={[styles.productCartTxt, { marginBottom: 20 }]}>
              ${item.price}
            </Text>
            <Text style={styles.productCartTxt}>Quantiy X{item.qty}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => dispatch(removeFromCart(item))}>
              <Text style={styles.productCartTxt}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(addToSavedForLater(item))}
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

const TotalContinue = ({ cart, navigation }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotal())
  }, [dispatch, cart])

  const { cartTotalAmount } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.user)

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
          navigation.navigate(
            `${Object.keys(user).length === 0 ? 'CartLogin' : 'Summary'}`
          )
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
          Total ${cartTotalAmount}
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
})
