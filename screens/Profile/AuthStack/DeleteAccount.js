import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackIcon from '../../../components/BackIcon'
import Change from '../../../components/profile/user/Change'
import Btn from '../../../components/profile/user/Btn'

export default function DeleteAccount({ navigation }) {
  return (
    <>
      <BackIcon onPress={() => navigation.replace('ManageAccount')} />

      <View style={styles.manageContainer}>
        <Change
          title={'Delete your account'}
          description={
            'You are about to begin the process to delete your account'
          }
        />

        <View>
          <Text style={styles.deleteTitle}>Remember:</Text>
          <Text style={styles.txt}>
            You will not be able to track any purchase, return and/or exchange
            online.
          </Text>
          <Text style={styles.txt}>
            You will not be able to access your RH account.
          </Text>
        </View>

        <Btn
          title={'Continue'}
          onPress={() => console.log('DELETE USER PROFILE FUNCTIONALITY')}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  manageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingHorizontal: 25,
  },
  deleteTitle: {
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 20,
  },
  txt: {
    marginVertical: 10,
    color: '#282828',
    fontSize: 13,
    fontWeight: '300',
  },
})
