import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import TotalPayCard from './TotalPayCard'
import Btn from '../profile/user/Btn'

export default function TotalToPay() {
  const { cart, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  )
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

      <UserInfo user={user} />
      <UserCheck
        cart={cart}
        totalQty={cartTotalQuantity}
        totalAmount={cartTotalAmount}
      />
      <Btn title={'Authoritize payment'} onPress={() => console.log('Done')} />
    </View>
  )
}

const UserInfo = ({ user }) => {
  return (
    <View style={styles.userInfoContainer}>
      <Text style={styles.userTitle}>
        {user.name} {user.surname}
      </Text>
      <View>
        <Text style={styles.userTxt}>{user.address}</Text>
        <Text style={styles.userTxt}>
          {user.city}, {user.postal}
        </Text>
        <Text style={styles.userTxt}>{user.country}</Text>
      </View>
    </View>
  )
}

const UserCheck = ({ cart, totalQty, totalAmount }) => {
  return (
    <View style={styles.userCheckContainer}>
      <View style={styles.checkLeft}>
        <Text style={styles.userTxt}>
          {totalQty} {totalQty > 1 ? 'Items' : 'Item'}
        </Text>
        <Text style={styles.userTxt}>Shipping</Text>
        <Text style={styles.userTxt}>Shipping Discount</Text>
        <Text style={styles.userTitle}>Total</Text>
      </View>
      <View style={styles.checkRight}>
        <Text style={styles.userTxt}>${totalAmount}</Text>
        <Text style={styles.userTxt}>$450</Text>
        <Text style={styles.userTxt}>-$450</Text>
        <Text style={styles.userTitle}>${totalAmount}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 25,
    paddingVertical: 20,
    flex: 1,
  },
  itemQty: {
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  userInfoContainer: {
    marginTop: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
    paddingVertical: 5,
  },
  userTitle: {
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 10,
    fontSize: 12,
  },
  userTxt: {
    color: '#a2a2a2',
    marginBottom: 4,
    textTransform: 'uppercase',
    fontSize: 12,
  },

  // USER CHECK
  userCheckContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  checkLeft: {},
  checkRight: {},
})
