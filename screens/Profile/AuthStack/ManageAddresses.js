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

export default function ManageAddresses({ navigation }) {
  return (
    <>
      <BackIcon onPress={() => navigation.navigate('UserProfile')} />

      <ScrollView style={styles.manageContainer}>
        <Text style={styles.manageTitle}>Addresses</Text>

        {/* Map ako ima vise naravno */}
        <Address
          name={'Customer'}
          country={'Serbia'}
          onPress={() => navigation.navigate('EditAddress')}
        />
        <Address name={'Customer'} country={'Serbia'} />
        <Address name={'Customer'} country={'Serbia'} />
        <Address name={'Customer'} country={'Serbia'} />
      </ScrollView>

      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate('EditAddress')}
      >
        <Text style={styles.btnTxt}>Add another Address</Text>
      </TouchableOpacity>
    </>
  )
}

const Address = ({ name, country, onPress }) => {
  return (
    <View>
      <ForwardScreen title={name} onPress={onPress} />
      <View>
        <Text style={styles.countryTxt}>Edit</Text>
      </View>
    </View>
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
