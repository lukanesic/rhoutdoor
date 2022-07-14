import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackIcon from '../../../components/BackIcon'
import Change from '../../../components/profile/user/Change'
import Btn from '../../../components/profile/user/Btn'
import { useDispatch, useSelector } from 'react-redux'

import { auth, db } from './../../../firebase'
import { doc, deleteDoc } from 'firebase/firestore'
import { removeUserFromStorage } from '../../../store/userSlice'
import { deleteUser } from '@firebase/auth'

export default function DeleteAccount({ navigation }) {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleDelete = async (email) => {
    const response = await deleteDoc(doc(db, 'users', email))
    navigation.navigate('Login')
    dispatch(removeUserFromStorage())

    try {
      await deleteUser(auth.currentUser)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <BackIcon onPress={() => navigation.navigate('ManageAccount')} />

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

        <Btn title={'Continue'} onPress={() => handleDelete(user.email)} />
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
