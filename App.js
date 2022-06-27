import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Foundation, EvilIcons, Feather } from '@expo/vector-icons'

import { Provider } from 'react-redux'
import store from './store/store'

import Home from './screens/Home'
import Search from './screens/Search'
import Menu from './screens/Menu'
import Profile from './screens/Profile'
import Cart from './screens/Cart'

const BottomTabs = createBottomTabNavigator()

export default function App() {
  return (
    <>
      <StatusBar style={'light'} />
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabs.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: { backgroundColor: '#000' },
              tabBarActiveTintColor: '#fff',
              tintColor: '#fff',
              tabBarLabel: () => null,
            }}
          >
            <BottomTabs.Screen
              name='Home'
              component={Home}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Foundation
                    name='home'
                    size={24}
                    color={`${focused ? '#fff' : '#cecece'}`}
                  />
                ),
              }}
            />

            <BottomTabs.Screen
              name='Search'
              component={Search}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather
                    name='search'
                    size={24}
                    color={`${focused ? '#fff' : '#cecece'}`}
                  />
                ),
              }}
            />

            <BottomTabs.Screen
              name='Menu'
              component={Menu}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather
                    name='menu'
                    size={24}
                    color={`${focused ? '#fff' : '#cecece'}`}
                  />
                ),
              }}
            />

            <BottomTabs.Screen
              name='Profile'
              component={Profile}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather
                    name='user'
                    size={24}
                    color={`${focused ? '#fff' : '#cecece'}`}
                  />
                ),
              }}
            />

            <BottomTabs.Screen
              name='Cart'
              component={Cart}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather
                    name='shopping-cart'
                    size={24}
                    color={`${focused ? '#fff' : '#cecece'}`}
                  />
                ),
              }}
            />
          </BottomTabs.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  )
}
