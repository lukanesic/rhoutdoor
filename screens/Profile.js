import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'

import Title from './../components/Title'
import Form, { FloatingLabel } from '../components/profile/login/Form'
import Help from '../components/profile/login/Help'

import RForm from '../components/profile/recovery/RForm'
import SForm from '../components/profile/signup/SForm'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons'
import Latest from '../components/profile/signup/Latest'
import Categories from '../components/profile/user/Categories'
import Purchases from '../components/profile/user/Purchases'

import ProfileTab, {
  ForwardScreen,
} from '../components/profile/user/ProfileTab'

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
        <Stack.Screen name='SignupSuccess' component={SignupSuccess} />
        <Stack.Screen name='UserProfile' component={UserProfile} />
        <Stack.Screen name='ManageAccount' component={ManageAccount} />
        <Stack.Screen name='ManageAddress' component={ManageAddress} />

        <Stack.Screen name='ChangeEmail' component={ChangeEmail} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// PODELITI STACK NA AUTH I !AUTH

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

// IF USER AUTH

const UserProfile = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Purchases')

  return (
    <View style={styles.recoveryContainer}>
      <Title color={'#000'} />
      <Categories active={activeTab} setActive={setActiveTab} />
      <View style={styles.activeTabContainer}>
        {activeTab === 'Purchases' && <Purchases />}
        {activeTab === 'Profile' && <ProfileTab navigation={navigation} />}
      </View>
    </View>
  )
}

const ManageAccount = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('UserProfile')}
        style={styles.icon}
      >
        <Ionicons name='arrow-back' size={34} color='black' />
      </TouchableOpacity>

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

// SUB SCREENS
// REUSABLE CHANGE COMPONENTS / SCREENS
const ChangeEmail = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('ManageAccount')}
        style={styles.icon}
      >
        <Ionicons name='arrow-back' size={34} color='black' />
      </TouchableOpacity>

      <ScrollView style={styles.manageContainer}>
        <Text style={styles.manageTitle}>Change Email</Text>
        <Text style={styles.changeEmailTxt}>
          Your current email address is
          <Text style={{ fontWeight: 'bold' }}> customer@gmail.com</Text>
        </Text>

        {/* RESITI STATE ZA OVO */}
        <FloatingLabel
          label={'Current Password'}
          textConfig={''}
          value={''}
          color={'#000'}
        />
        <FloatingLabel
          label={'New Email'}
          textConfig={''}
          value={''}
          color={'#000'}
        />
        <FloatingLabel
          label={'Repeat New Email Address'}
          textConfig={''}
          value={''}
          color={'#000'}
        />
      </ScrollView>
    </>
  )
}

const ChangePassword = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('ManageAccount')}
        style={styles.icon}
      >
        <Ionicons name='arrow-back' size={34} color='black' />
      </TouchableOpacity>

      <ScrollView style={styles.manageContainer}>
        <Text style={styles.manageTitle}>Change Password</Text>
        <Text style={styles.changeEmailTxt}>
          If you wish to change the password to access your account, please
          provide the following information
        </Text>

        {/* RESITI STATE ZA OVO */}
        <FloatingLabel
          label={'customer@email.com'}
          textConfig={''}
          value={''}
          color={'#000'}
        />
        <FloatingLabel
          label={'Old Password'}
          textConfig={''}
          value={''}
          color={'#000'}
        />
        <FloatingLabel
          label={'New Password'}
          textConfig={''}
          value={''}
          color={'#000'}
        />
      </ScrollView>
    </>
  )
}

const ManageAddress = () => {
  return (
    <View>
      <Text>Manage AManageAddress</Text>
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
  icon: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1000,
  },
  activeTabContainer: {
    marginHorizontal: 29,
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
  changeEmailTxt: {
    fontSize: 10,
    color: '#a2a2a2',
    marginTop: 20,
    textTransform: 'uppercase',
  },
})
