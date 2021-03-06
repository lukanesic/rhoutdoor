import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './../screens/Profile/NotAuthStack/Login'
import Signup from './../screens/Profile/NotAuthStack/Signup'
import Recovery from './../screens/Profile/NotAuthStack/Recovery'

import UserProfile from './Profile/AuthStack/UserProfile'
import ManageAccount from './Profile/AuthStack/ManageAccount'
import ManageAddresses from './Profile/AuthStack/ManageAddresses'
import ChangeEmail from './Profile/AuthStack/ChangeEmail'
import ChangePassword from './Profile/AuthStack/ChangePassword'
import DeleteAccount from './Profile/AuthStack/DeleteAccount'
import EditAddress from './Profile/AuthStack/EditAddress'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { setUserFromStorage } from '../store/userSlice'

const Stack = createStackNavigator()

export default function Profile() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('token')

      if (storedToken) {
        dispatch(setUserFromStorage(JSON.parse(storedToken)))
      }
    }

    fetchToken()
  }, [])

  const { user } = useSelector((state) => state.user)

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* NOT AUTH STACK */}
        {Object.keys(user).length === 0 && (
          <>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Recovery' component={Recovery} />
            <Stack.Screen name='Signup' component={Signup} />
          </>
        )}

        {Object.keys(user).length !== 0 && (
          <>
            <Stack.Screen name='SignupSuccess' component={SignupSuccess} />

            <Stack.Screen name='UserProfile' component={UserProfile} />
            <Stack.Screen name='ManageAccount' component={ManageAccount} />
            <Stack.Screen name='ManageAddress' component={ManageAddresses} />

            <Stack.Screen name='ChangeEmail' component={ChangeEmail} />
            <Stack.Screen name='ChangePassword' component={ChangePassword} />
            <Stack.Screen name='DeleteAccount' component={DeleteAccount} />

            <Stack.Screen name='EditAddress' component={EditAddress} />
          </>
        )}

        {/* Loading to AUTH STACK */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const SignupSuccess = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('UserProfile')
    }, 3000)
  }, [])

  return (
    <View style={styles.signupSuccess}>
      <ActivityIndicator size='small' color='#0000ff' />
      <Text style={styles.loadingtxt}>Loading</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  signupSuccess: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingtxt: {
    color: '#000',
    fontSize: 16,
    marginTop: 15,
  },
})
