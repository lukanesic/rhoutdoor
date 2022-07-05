import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'

import { FloatingLabel } from '../../FloatingLabel'
import ContinueBtn from '../../ContinueBtn'
import ValidationMessage from '../../ValidationMessage'

export default function SForm({ navigation }) {
  const [inputs, setInputs] = useState({
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatPassword: {
      value: '',
      isValid: true,
    },
    name: {
      value: '',
      isValid: true,
    },
    surname: {
      value: '',
      isValid: true,
    },
    email: {
      value: '',
      isValid: true,
    },
  })

  const inputHandler = (identifier, val) => {
    setInputs((current) => {
      return {
        ...current,
        [identifier]: { value: val, isValid: true },
      }
    })
  }

  const onSubmit = () => {
    const email = inputs.email.value
    const password = inputs.password.value
    const repeatPassword = inputs.repeatPassword.value
    const name = inputs.name.value
    const surname = inputs.surname.value

    const emailIsValid = email.includes('@')
    const passwordIsValid = password.length >= 7
    const repeatPasswordIsValid = password === repeatPassword
    const nameIsValid = name.length > 0
    const surnameIsValid = surname.length > 0

    if (
      !emailIsValid ||
      !passwordIsValid ||
      !repeatPasswordIsValid ||
      !nameIsValid ||
      !surnameIsValid
    ) {
      setInputs((current) => {
        return {
          email: { value: current.email.value, isValid: emailIsValid },
          password: { value: current.password.value, isValid: passwordIsValid },
          repeatPassword: {
            value: current.repeatPassword.value,
            isValid: repeatPasswordIsValid,
          },
          name: { value: current.name.value, isValid: nameIsValid },
          surname: { value: current.surname.value, isValid: surnameIsValid },
        }
      })
      return
    }

    // DISPATCH
    // DB
  }

  return (
    <>
      <ContinueBtn
        title={'Continue'}
        onPress={() => navigation.navigate('SignupSuccess')}
      />
      <Pressable onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Personal Details</Text>

          <FloatingLabel
            label={'Email'}
            value={inputs.email.value}
            textConfig={{
              onChangeText: inputHandler.bind(this, 'email'),
            }}
            color={'#000'}
          />
          {!inputs.email.isValid && (
            <ValidationMessage message={'Please enter valid email address'} />
          )}

          <FloatingLabel
            label={'Password'}
            value={inputs.password.value}
            textConfig={{
              onChangeText: inputHandler.bind(this, 'password'),
              secureTextEntry: true,
            }}
            color={'#000'}
          />
          {!inputs.password.isValid && (
            <ValidationMessage
              message={'Your password must contain more than 7 characters'}
            />
          )}

          <FloatingLabel
            label={'Repeat Password'}
            value={inputs.repeatPassword.value}
            textConfig={{
              onChangeText: inputHandler.bind(this, 'repeatPassword'),
              secureTextEntry: true,
            }}
            color={'#000'}
          />
          {!inputs.repeatPassword.isValid && (
            <ValidationMessage
              message={`Your password doesn't match. Try again`}
            />
          )}

          <FloatingLabel
            label={'Name'}
            value={inputs.name.value}
            textConfig={{
              onChangeText: inputHandler.bind(this, 'name'),
            }}
            color={'#000'}
          />
          {!inputs.name.isValid && (
            <ValidationMessage message={'Please enter your name'} />
          )}

          <FloatingLabel
            label={'Surname'}
            value={inputs.surname.value}
            textConfig={{
              onChangeText: inputHandler.bind(this, 'surname'),
            }}
            color={'#000'}
          />
          {!inputs.surname.isValid && (
            <ValidationMessage message={'Please enter your surname'} />
          )}
        </View>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 220,
    marginLeft: 45,
    marginRight: 45,
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
})
