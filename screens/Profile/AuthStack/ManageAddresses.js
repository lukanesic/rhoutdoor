import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'

import BackIcon from './../../../components/BackIcon'
import ForwardScreen from '../../../components/ForwardScreen'
import Btn from '../../../components/profile/user/Btn'
import { useSelector } from 'react-redux'

export default function ManageAddresses({ navigation }) {
  const { user } = useSelector((state) => state.user)

  return (
    <>
      <BackIcon onPress={() => navigation.navigate('UserProfile')} />

      <ScrollView style={styles.manageContainer}>
        <Text style={styles.manageTitle}>Address</Text>

        {!Object.keys(user).includes('address') && (
          <View>
            <Text>You dont have any address</Text>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('EditAddress')}
            >
              <Text style={styles.btnTxt}>Add another Address</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Map ako ima vise naravno */}
        {Object.keys(user).includes('address') && (
          <Address
            address={user.address}
            country={user.country}
            onPress={() => navigation.navigate('EditAddress')}
          />
        )}
      </ScrollView>

      {/* <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate('EditAddress')}
      >
        <Text style={styles.btnTxt}>Add another Address</Text>
      </TouchableOpacity> */}
    </>
  )
}

const Address = ({ address, country, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ForwardScreen title={address} onPress={onPress} />
      <View>
        <Text style={styles.countryTxt}>{country}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  manageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingHorizontal: 25,
  },
  manageTitle: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  manageBtn: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 40,
    backgroundColor: '#000',
  },
  countryTxt: {
    textTransform: 'uppercase',
    color: '#a2a2a2',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: '90%',
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  btnTxt: {
    padding: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '500',
  },
})
