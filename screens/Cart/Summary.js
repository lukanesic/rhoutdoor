import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../../components/Title'
import BackIcon from '../../components/BackIcon'
import { useSelector } from 'react-redux'
import TotalToPay from '../../components/cart/TotalToPay'
import EditAddress from '../Profile/AuthStack/EditAddress'

export default function Summary({ navigation }) {
  const { user } = useSelector((state) => state.user)

  console.log(Object.keys(user).includes('address'))

  return (
    <View style={styles.container}>
      <BackIcon onPress={() => navigation.navigate('CartScreen')} />
      {Object.keys(user).includes('address') && <TotalToPay />}
      {!Object.keys(user).includes('address') && (
        <EditAddress
          navigation={navigation}
          navigationLocation={'CartScreen'}
        />
      )}
    </View>
  )
}

const AddAddress = () => {
  return (
    <View>
      <Text>Add Address</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
