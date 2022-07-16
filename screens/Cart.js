import { StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'

const Stack = createStackNavigator()

import CartScreen from './Cart/CartScreen'
import CartLogin from './Cart/CartLogin'
import Summary from './Cart/Summary'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUserFromStorage } from '../store/userSlice'

const { height, width } = Dimensions.get('window')

export default function Cart() {
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
        <Stack.Screen name='CartScreen' component={CartScreen} />

        {Object.keys(user).length === 0 && (
          <Stack.Screen
            name='CartLogin'
            component={CartLogin}
            options={{
              presentation: 'modal',
            }}
          />
        )}
        {Object.keys(user).length !== 0 && (
          <Stack.Screen name='Summary' component={Summary} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 100,
    marginLeft: 25,
  },
  tabTxt: {
    textTransform: 'uppercase',
    marginRight: 20,
    fontWeight: '400',
    color: '#a2a2a2',
  },
  active: {
    color: '#000',
    fontWeight: '600',
  },
  contentContainer: {
    borderWidth: 1,
    borderColor: '#000',
    height: height,
  },

  box1: {
    height: height / 2 - 100,
  },
})
