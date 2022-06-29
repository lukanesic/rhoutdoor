import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'

import Title from './../components/Title'
import Form from '../components/profile/login/Form'
import Help from '../components/profile/login/Help'

import RForm from '../components/profile/recovery/RForm'
import SForm from '../components/profile/signup/SForm'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons'
import Latest from '../components/profile/signup/Latest'

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
    <ScrollView style={styles.loginContainer}>
      <Title />
      <Form navigation={navigation} />
      <Help navigation={navigation} />
    </ScrollView>
  )
}

const PasswordRecovery = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.icon}
      >
        <Ionicons name='arrow-back' size={34} color='black' />
      </TouchableOpacity>
      <ScrollView style={styles.recoveryContainer}>
        <Title color={'#000'} />
        <RForm />
      </ScrollView>
    </>
  )
}

const SignUp = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.icon}
      >
        <Ionicons name='arrow-back' size={34} color='black' />
      </TouchableOpacity>

      <ScrollView style={styles.recoveryContainer}>
        <Title color={'#000'} />
        <SForm navigation={navigation} />
        <Latest />
      </ScrollView>
    </>
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
    zIndex: 1000,
  },
})
