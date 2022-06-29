import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'

export default function ProfileTab({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Customer Name</Text>
      <Text style={styles.email}>customer@gmail.com</Text>

      <ForwardScreen
        title={'Account'}
        onPress={() => navigation.replace('ManageAccount')}
      />
      <ForwardScreen
        title={'Addresses'}
        onPress={() => navigation.replace('ManageAddress')}
      />

      <View style={styles.privacyContainer}>
        <Text style={styles.privacyTxt}>
          At Rh World we take your privacy very seriously and are commited to
          the protection of your personal data. Learn mora about how we care for
          and use your data in ouy{' '}
          <Text style={{ fontWeight: 'bold' }}> privacy policy</Text>
        </Text>
      </View>
    </View>
  )
}

export const ForwardScreen = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.screensContainer} onPress={onPress}>
      <Text style={styles.screenTxt}>{title}</Text>
      <MaterialIcons name='arrow-forward-ios' size={18} color='gray' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  name: {
    fontWeight: 'bold',
    marginVertical: 5,
    textTransform: 'uppercase',
    color: '#000',
    fontSize: 12,
  },
  email: {
    color: '#a1a1a1',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  screensContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  screenTxt: {
    fontWeight: 'bold',
    marginVertical: 5,
    textTransform: 'uppercase',
    color: '#282828',
    fontSize: 12,
  },
  privacyContainer: {
    marginTop: 50,
  },
  privacyTxt: {
    fontSize: 9,
    textTransform: 'uppercase',
    color: '#a2a2a2',
  },
})
