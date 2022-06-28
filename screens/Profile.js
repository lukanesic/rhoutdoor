import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Title from './../components/Title'
import Form from '../components/profile/login/Form'
import Help from '../components/profile/login/Help'

import RForm from '../components/profile/recovery/RForm'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator()

export default function Profile() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Recovery' component={PasswordRecovery} />
        <Stack.Screen name='Signup' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Login = ({ navigation }) => {
  return (
    <View style={styles.loginContainer}>
      <Title />
      <Form navigation={navigation} />
      <Help navigation={navigation} />
    </View>
  )
}

const PasswordRecovery = ({ navigation }) => {
  return (
    <View style={styles.recoveryContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.icon}
      >
        <Ionicons name='arrow-back' size={34} color='black' />
      </TouchableOpacity>
      <Title color={'#000'} />
      <RForm />
    </View>
  )
}

const SignUp = () => {
  return (
    <View>
      <Text>Sign</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  recoveryContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
})
