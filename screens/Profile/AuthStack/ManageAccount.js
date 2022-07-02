import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import ForwardScreen from '../../../components/ForwardScreen'

import BackIcon from '../../../components/BackIcon'
import Btn from '../../../components/profile/user/Btn'

export default function ManageAccount({ navigation }) {
  return (
    <>
      <BackIcon onPress={() => navigation.replace('UserProfile')} />

      <ScrollView style={styles.manageContainer}>
        <Text style={styles.manageTitle}>Account</Text>
        <View>
          <ForwardScreen
            title={'Change e-mail'}
            onPress={() => navigation.replace('ChangeEmail')}
          />
          <ForwardScreen
            title={'Change password'}
            onPress={() => navigation.replace('ChangePassword')}
          />
          <ForwardScreen
            title={'Delete your account'}
            onPress={() => navigation.replace('DeleteAccount')}
          />
        </View>

        <Btn
          onPress={() => console.log('LOGOUT USER FUNCTIONALITY')}
          title={'End Session'}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1000,
  },
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
})
