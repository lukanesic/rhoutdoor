import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'
import React from 'react'

import ForwardScreen from '../../ForwardScreen'
import { useSelector } from 'react-redux'

const { width } = Dimensions.get('window')

export default function ProfileTab({ navigation }) {
  const { user } = useSelector((state) => state.user)

  console.log(user)

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {user.name} {user.surname}
      </Text>
      <Text style={styles.email}>{user.email}</Text>

      <ForwardScreen
        title={'Account'}
        onPress={() => navigation.navigate('ManageAccount')}
      />
      <ForwardScreen
        title={'Addresses'}
        onPress={() => navigation.navigate('ManageAddress')}
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

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: width,
    paddingHorizontal: 30,
  },
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

  privacyContainer: {
    marginTop: 50,
  },
  privacyTxt: {
    fontSize: 9,
    textTransform: 'uppercase',
    color: '#a2a2a2',
  },
})
