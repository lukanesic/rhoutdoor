import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import ForwardScreen from '../../ForwardScreen'

const { width } = Dimensions.get('window')

export default function ProfileTab({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Customer Name</Text>
      <Text style={styles.email}>customer@gmail.com</Text>

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
