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
            onPress={() => console.log('1')}
          />
        </View>

        <TouchableOpacity
          style={styles.manageBtn}
          onPress={() => console.log('end')}
          activeOpacity={0.6}
        >
          {/* LOGOUT */}
          <Text style={styles.manageBtnTxt}>End session</Text>
        </TouchableOpacity>
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
  manageBtn: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 40,
    backgroundColor: '#000',
  },
  manageBtnTxt: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 12,
  },
})
