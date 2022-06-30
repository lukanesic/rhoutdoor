import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'

import { FloatingLabel } from '../../FloatingLabel'

import { AntDesign } from '@expo/vector-icons'

export default function Form({ navigation }) {
  const [inputs, setInputs] = useState({
    email: {
      value: '',
      isValid: true,
    },
    password: {
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

    const emailIsValid = email.includes('@')
    const passwordIsValid = password.length > 0

    if (!emailIsValid || !passwordIsValid) {
      setInputs((current) => {
        return {
          email: { value: current.email.value, isValid: emailIsValid },
          password: { value: current.password.value, isValid: passwordIsValid },
        }
      })
      return
    }

    // DISPATCH
    // DATABASE
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in</Text>
      <View style={styles.form}>
        <FloatingLabel
          label={'Email'}
          validation={inputs.email.isValid}
          value={inputs.email.value}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'email'),
          }}
        />
        {!inputs.email.isValid && (
          <View style={styles.validateContainer}>
            <AntDesign name='exclamationcircleo' size={12} color='red' />
            <Text style={styles.validate}>
              Please enter a valid email address
            </Text>
          </View>
        )}

        <FloatingLabel
          label={'Password'}
          value={inputs.password.value}
          validation={inputs.password.isValid}
          textConfig={{
            onChangeText: inputHandler.bind(this, 'password'),
            secureTextEntry: true,
          }}
        />
        {!inputs.password.isValid && (
          <View style={styles.validateContainer}>
            <AntDesign name='exclamationcircleo' size={12} color='red' />
            <Text style={styles.validate}>Please enter your password</Text>
          </View>
        )}
      </View>
      {/* REUSABLE !!!  */}
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={onSubmit}
      >
        <Text style={styles.btnTxt}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Recovery')}>
        <Text style={styles.li}>Have you forgotten your password?</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 45,
    marginTop: 220,
    marginRight: 45,
  },
  header: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: '500',
  },
  form: {
    marginTop: 30,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 20,
  },
  btnTxt: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  li: {
    color: '#fff',
    fontSize: 10,
    textTransform: 'uppercase',
  },

  inputContainer: {
    paddingTop: 5,
  },
  icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  validateContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  validate: {
    color: '#ff1c1b',

    fontSize: 12,
    marginLeft: 5,
  },
})
